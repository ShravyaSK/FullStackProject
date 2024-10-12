import { Col, Form, Modal, Row, Table, Button, message } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { GetShowsByTheatreId } from "../../../apicalls/shows";
import { GetAllMovies } from "../../../apicalls/movies";

function Shows({ openShowsModal, setOpenShowsModal, theatre }) {
  const [view, setView] = useState("list");
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    try {
      const response = await GetShowsByTheatreId(theatre._id);
      const moviesResponse = await GetAllMovies();

      if (moviesResponse.data.success) {
        setMovies(moviesResponse.data.movies);
      } else {
        message.error("Something went wrong!");
      }

      if (response.data.success) {
        setShows(response.data.shows);
        message.success("Shows fetched!");
      } else {
        message.error("Something went wrong!");
      }
    } catch (error) {
      message.error("Something went wrong!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "Show Name",
      dataIndex: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => {
        return moment(text).format("MMM Do YYYY");
      },
    },
    {
      title: "Time",
      dataIndex: "time",
    },
    {
      title: "Movie",
      dataIndex: "movie",
      render: (text, record) => {
        return record.movie.title;
      },
    },
    {
      title: "Ticket Price",
      dataIndex: "ticketPrice",
    },
    {
      title: "Total Seats",
      dataIndex: "totalSeats",
    },
    {
      title: "Available Seats",
      dataIndex: "availableSeats",
      render: (text, record) => {
        return record.totalSeats - record.bookedSeats.length;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-1 items-center">
            {record.bookedSeats.length === 0 && (
              <i
                className="ri-delete-bin-line"
                onClick={() => {
                  //   handleDelete(record._id);
                }}
              ></i>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <Modal
      title=""
      open={openShowsModal}
      onCancel={() => setOpenShowsModal(false)}
      width={1400}
      footer={null}
    >
      <h1 className="text-primary text-md uppercase mb-1">
        Theatre : {theatre.name}
      </h1>

      <hr />

      <div className="flex justify-between mt-1 mb-1 items-center">
        <h1 className="text-md uppercase">
          {view === "table" ? "Shows" : "Add Show"}
        </h1>
        {
          <Button
            variant="outlined"
            onClick={() => {
              setView("form");
            }}
          >
            Add Show
          </Button>
        }
      </div>

      {view === "list" && <Table columns={columns} dataSource={shows} />}

      {view === "form" && (
        <Form layout="vertical" onFinish={() => {}}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Form.Item
                label="Show Name"
                name="name"
                rules={[{ required: true, message: "Please input show name!" }]}
              >
                <input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: "Please input show date!" }]}
              >
                <input type="date" min={new Date()} />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Time"
                name="time"
                rules={[{ required: true, message: "Please input show time!" }]}
              >
                <input type="time" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Movie"
                name="movie"
                rules={[{ required: true, message: "Please select movie!" }]}
              >
                <select>
                  <option value="">Select Movie</option>
                  {[].map((movie) => (
                    <option value={movie._id}>{movie.title}</option>
                  ))}
                </select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Ticket Price"
                name="ticketPrice"
                rules={[
                  { required: true, message: "Please input ticket price!" },
                ]}
              >
                <input type="number" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Total Seats"
                name="totalSeats"
                rules={[
                  { required: true, message: "Please input total seats!" },
                ]}
              >
                <input type="number" />
              </Form.Item>
            </Col>
          </Row>

          <div className="flex justify-end gap-1">
            <Button
              variant="outlined"
              onClick={() => {
                setView("list");
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" htmlType="submit">
              SAVE
            </Button>
          </div>
        </Form>
      )}
    </Modal>
  );
}

export default Shows;
