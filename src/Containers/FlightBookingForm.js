import React, { useState } from "react";
import SelectComponent from "../Components/SelectComponent";
import AutoCompleteComponent from "../Components/AutoCompleteComponent";
import { Button, DatePicker, Space } from "antd";

function FlightBookingForm() {
  const [tripType, setTripType] = useState("oneWay");
  const [flights, setFlights] = useState([
    { source: "", destination: "", departureDate: "", returnDate: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the server for processing
  };

  const handleAddFlight = () => {
    setFlights([
      ...flights,
      { source: "", destination: "", departureDate: "", returnDate: "" },
    ]);
  };

  const handleRemoveFlight = (index) => {
    setFlights([...flights.slice(0, index), ...flights.slice(index + 1)]);
  };

  const handleFlightChange = (index, key, value) => {
    setFlights([
      ...flights.slice(0, index),
      { ...flights[index], [key]: value },
      ...flights.slice(index + 1),
    ]);
  };

  const tripTypes = [
    {
      value: "oneWay",
      label: "One-way",
    },
    {
      value: "roundTrip",
      label: "Round-trip",
    },
    {
      value: "multiCity",
      label: "Multi-city",
    },
  ];

  const airports = [
    {
      value: "HYD",
    },
    {
      value: "VTZ",
    },
    {
      value: "BLR",
    },
  ];

  const handleChange = (value) => setTripType(value);
  return (
    <form onSubmit={handleSubmit}>
      <Space align="center">
        <div style={{ display: "flex" }}>
          <SelectComponent type={tripTypes} onTripTypeChange={handleChange} />
        </div>
        {flights.map((flight, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <div>
              <AutoCompleteComponent
                options={airports}
                onChange={(e) =>
                  handleFlightChange(index, "source", e.target.value)
                }
                placeHolder={"where From"}
              />
            </div>
            <div>
              <AutoCompleteComponent
                options={airports}
                onChange={(e) =>
                  handleFlightChange(index, "destination", e.target.value)
                }
                placeHolder={"where From"}
              />
            </div>
            <div>
              <DatePicker
                onChange={(e) =>
                  handleFlightChange(index, "departureDate", e.target.value)
                }
              />
            </div>
            {tripType === "roundTrip" && (
              <div>
                <DatePicker
                  onChange={(e) =>
                    handleFlightChange(index, "returnDate", e.target.value)
                  }
                />
              </div>
            )}
            {tripType === "multiCity" && (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <Button type="primary" onClick={handleAddFlight}>
                  Add Flight
                </Button>
                {flights.length > 1 && (
                  <Button
                    type="primary"
                    onClick={() => handleRemoveFlight(flights.length - 1)}
                  >
                    Remove Last Flight
                  </Button>
                )}
              </div>
            )}
          </div>
        ))}

        <Button style={{ marginTop: "20px" }} type="primary">
          Search
        </Button>
      </Space>
    </form>
  );
}

export default FlightBookingForm;
