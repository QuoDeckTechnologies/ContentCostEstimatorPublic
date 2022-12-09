import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { Header, Image, Table, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Customise.css";

export default function Customise() {
  const [state, setState] = useState({});

  const [schema, setSchema] = useState([
    {
      name: "textual-content-slide",
      text: "Textual Content Slide",
      proportion: 20,
      screens: 30,
    },
    {
      name: "visual-content-slide",
      text: "Visual Content Slide",
      proportion: 30,
      screens: 10,
    },
    {
      name: "interactive-visual-slide",
      text: "Interactive Visual Content Slide",
      proportion: 10,
      screens: 60,
    },
    {
      name: "textual-question-slide",
      text: "Textual Question Slide",
      proportion: 90,
      screens: 5,
    },
    {
      name: "visual-quetion-slide",
      text: "Visual Question Slide",
      proportion: 10,
      screens: 90,
    },
  ]);

  const [videos, setVideos] = useState([
    {
      name: "slideshows",
      text: "Slideshows",
      proportion: 10,
    },
    {
      name: "story-based-slideshows",
      text: "Story-Based Slideshows",
      proportion: 30,
    },
    {
      name: "screencasts",
      text: "Screencasts",
      proportion: 60,
    },
    {
      name: "iconic-infographic-video",
      text: "Iconic/Infographic Video",
      proportion: 70,
    },
    {
      name: "2d-animated-story",
      text: "2D Animated Story",
      proportion: 20,
    },
    {
      name: "whiteboard-animation",
      text: "Whiteboard Animation",
      proportion: 90,
    },
    {
      name: "motion-graphics",
      text: "Motion graphics",
      proportion: 55,
    },
  ]);

  useEffect(() => {
    let contentSlides = schema;
    let videosData = videos;
    let state1 = {
      contentSlides,
      videosData,
    };
    setState(state1);
  }, []);

  function handleChange(e) {
    let contentSlides = schema;

    contentSlides.forEach((ele) => {
      if (ele.name === e.target.name) {
        ele.proportion = e.target.value;
      }
    });
    setSchema([...contentSlides]);
  }

  return (
    <div className="customise-container">
      <div className="customise-panel-container">
        <h1>As per you: How many hours content you want?</h1>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="1">
                What you will get per hour of content:
              </Table.HeaderCell>
              <Table.HeaderCell colSpan="2">Customize It</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="1">Content Slides</Table.HeaderCell>
              <Table.HeaderCell colSpan="1">Proportion</Table.HeaderCell>
              <Table.HeaderCell colSpan="1">Screens</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {schema.map((element, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{element.text}</Table.Cell>
                  <Table.Cell>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      name={element.name}
                      value={element.proportion}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      name={element.name}
                      value={element.screens}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="1">Videos</Table.HeaderCell>
              <Table.HeaderCell colSpan="1">Proportion</Table.HeaderCell>
              <Table.HeaderCell colSpan="1">Minutes</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {videos.map((element, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{element.text}</Table.Cell>
                  <Table.Cell>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      name={element.name}
                      value={element.proportion}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      name={element.name}
                      value={element.screens}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        {/* <Table celled striped attached>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="1">Content Slides</Table.HeaderCell>
              <Table.HeaderCell colSpan="1">Proportion</Table.HeaderCell>
              <Table.HeaderCell colSpan="1">Screens</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {videos.map((element, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{element.text}</Table.Cell>
                  <Table.Cell>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      name={element.name}
                      value={element.proportion}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      name={element.name}
                      value={element.screens}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table> */}
      </div>
    </div>
  );
}
