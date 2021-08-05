import React from "react";
import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from "reactstrap";
import copy from '../copy.json';

const useStyles = createUseStyles({
  info: {
    "align-self": "center"
  },
  colKey: {
    textAlign: 'left'
  },
  colValue: {
    textAlign: 'left'
  }
});

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
        <Col sm="12">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div className="row">
                <div className="col-md-7">
                  <div className="title-box-2">
                    <h2 className="title-left">Send A Message</h2>
                  </div>
                  <div>
                    <form
                      action="https://formspree.io/f/xzbkyopb"
                      method="POST"
                      className="contactForm"
                      onSubmit={this.submitForm}
                    >
                      <div id="sendmessage">
                        Your message has been sent. Thank you!
                      </div>
                      <div id="errormessage"></div>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 4 chars"
                            />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="_replyto"
                              id="email"
                              placeholder="Your Email"
                              data-rule="email"
                              data-msg="Please enter a valid email"
                            />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="_subject"
                              id="subject"
                              placeholder="Subject"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 8 chars"
                            />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="message"
                              rows="5"
                              data-rule="required"
                              data-msg="Please write something for us"
                              placeholder="Message"
                            ></textarea>
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          {status === "SUCCESS" ? <button type="submit" className="button button-a button-big button-rouded">Your message has been sent!</button> : <button type="submitted" className="button button-a button-big button-rouded">Send Message</button>}
                          {status === "ERROR" && <button type="failed" className="button button-a button-big button-rouded">There was an error, please contact me on LinkedIn</button>}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </section>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

function Contact() {
  const classes = useStyles();
  return(
    <div>
      <Container>
        <Row>
          <Col lg={{size: 3, offset: 1}} className={classes.info}>
            <Row>
              <Col className={classes.colKey}>Email: </Col>
              <Col className={classes.colValue}>{copy.Contact.Email}</Col>
            </Row>
            <Row>
              <Col className={classes.colKey}>Phone: </Col>
              <Col className={classes.colValue}>{copy.Contact.Phone}</Col>
            </Row>
            <Row>
              <Col className={classes.colKey}>Address: </Col>
              <Col className={classes.colValue}>{copy.Contact.Address}</Col>
            </Row>
          </Col>
          <Col lg="7">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;