import React from "react";

// reactstrap components
import { Container, Row, Col, Button, Input, Form } from "reactstrap";
import { Editor } from "@tinymce/tinymce-react";
import escapeHtml from "escape-html";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import client from "client.js";

class DiaryEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      content: null,
    };
    this.handleSaveDiary = this.handleSaveDiary.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (this.refs.main) this.refs.main.scrollTop = 0;
  }

  handleSaveDiary(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    client.Diary.createDiary(
      data.get("title"),
      // TODO: need to handle html escaping
      data.get("content")
    );
  }

  render() {
    return (
      <>
        <DemoNavbar />

        <main className="profile-page" ref="main">
          <section className="section">
            <Container>
              <div className="mt-6">
                <Form role="form" onSubmit={this.handleSaveDiary}>
                  <Row>
                    <Col className="order-lg-1" lg="9">
                      <Input
                        placeholder="Why is today special?"
                        type="text"
                        name="title"
                        style={{
                          border: "none",
                          fontSize: "20px",
                          padding: "0",
                          color: "#525f7f",
                        }}
                      />
                    </Col>
                    <Col
                      className="order-lg-2 text-lg-right align-self-lg-center"
                      lg="3"
                    >
                      <Button
                        className="float-right"
                        color="default"
                        type="submit"
                        size="sm"
                      >
                        Save
                      </Button>
                    </Col>
                    <Col className="border-top order-lg-3 mt-3" lg="12">
                      <div
                        className="mt-3"
                        style={{ minHeight: "100vh", width: "100%" }}
                      >
                        <Editor
                          initialValue="<p>Write your today's diary</p>"
                          textareaName="content"
                          init={{
                            height: "100vh",
                            menubar: false,
                            plugins: [
                              "advlist autolink lists link image charmap print preview anchor",
                              "searchreplace visualblocks code fullscreen",
                              "insertdatetime media table paste code help wordcount",
                            ],
                            toolbar:
                              "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default DiaryEditor;
