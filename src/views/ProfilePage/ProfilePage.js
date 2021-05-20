import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import WebIcon from "@material-ui/icons/Web";
import CodeIcon from "@material-ui/icons/Code";
import ContactMailIcon from "@material-ui/icons/ContactMail";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import profile from "assets/img/faces/memoji.png";

//Toastyyy -toast notifications
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Projects screenshots
import ebank from "assets/img/projects/ebank.png";
import gpu from "assets/img/projects/gpu.png";
import brute from "assets/img/projects/bf.png";

//Hovering library
import { AnimationWrapper } from "react-hover-animation";

//firebase imports
import { db } from "../../firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

//material styles
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { node } from "prop-types";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  //State hooks
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactText, setContactText] = useState("");
  const [emailValidator, setEmailValidator] = useState(false);

  //regex email validator
  const regex = /.{1,}@[^.]{1,}/;

  //handling the submit of contactform with some firebase
  const handleSubmit = () => {
    db.collection("texts")
      .add({
        timestamp: firebase.firestore.Timestamp.now(),
        name: contactName,
        email: contactEmail,
        text: contactText,
      })
      .then(() => {
        toast.warn("Form submitted!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setContactName("");
        setContactEmail("");
        setContactText("");
      })
      .catch((error) => {
        toast.error(`Error encountered, ${error}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <ToastContainer />
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={profile}
                      alt="Memoji"
                      className={{ background: "white" }}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Brian Angulo</h3>
                    <h6>Software Developer</h6>
                    <Button
                      target="_blank"
                      href="https://twitter.com/BrianAngulo11"
                      justIcon
                      link
                      className={classes.margin5}
                    >
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button
                      target="_blank"
                      href="https://github.com/brianangulo"
                      justIcon
                      link
                      className={classes.margin5}
                    >
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button
                      target="_blank"
                      href="https://www.linkedin.com/in/brian-angulo-63308a16b/"
                      justIcon
                      link
                      className={classes.margin5}
                    >
                      <i className={"fab fa-linkedin"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Resourceful and seasoned developer with a strong foundation in
                web and mobile development. Notable skills:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  JavaScript, HTML, CSS, SCSS, SASS, BootStrap, TailWind CSS,
                  Material UI, React Native, React.js, Node.js, Firebase &
                  Firestore, MongoDB, Wordpress, and PHP with Laravel.
                </span>{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="warning"
                  tabs={[
                    {
                      tabButton: "Live Projects",
                      tabIcon: WebIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <AnimationWrapper>
                              <a
                                target="_blank"
                                href="https://everyones-bank.netlify.app/"
                              >
                                <img
                                  alt="Screenshot of Everyone's Bank Project"
                                  src={ebank}
                                  className={navImageClasses}
                                />
                              </a>
                            </AnimationWrapper>
                            <p className={classes.projectSubTitle}>
                              Website for a fictional bank. Built mostly with
                              BootStrap, jQuery and SCSS.
                            </p>
                            <AnimationWrapper>
                              <a
                                target="_blank"
                                href="https://bruteforceit.netlify.app/?"
                              >
                                <img
                                  alt="Screenshot of BruteForce It Project"
                                  src={brute}
                                  className={navImageClasses}
                                />
                              </a>{" "}
                            </AnimationWrapper>
                            <p className={classes.projectSubTitle}>
                              Fun website that will test the brute-force
                              resistance of your passwords. Built with
                              React/Redux
                            </p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <AnimationWrapper>
                              <a
                                target="_blank"
                                href="https://play.google.com/store/apps/details?id=com.gputrackit.gputrackit"
                              >
                                <img
                                  alt="Screenshot of GPUTrackIT App Project"
                                  src={gpu}
                                  className={navImageClasses}
                                />
                              </a>{" "}
                            </AnimationWrapper>
                            <p className={classes.projectSubTitle}>
                              GPUTrackIt Android App Built with React Native
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Source Code",
                      tabIcon: CodeIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <AnimationWrapper>
                              <a
                                target="_blank"
                                href="https://github.com/brianangulo/everyonesbankproject"
                              >
                                <img
                                  alt="Screenshot of Everyone's Bank Project"
                                  src={ebank}
                                  className={navImageClasses}
                                />
                              </a>
                            </AnimationWrapper>
                            <p className={classes.projectSubTitle}>
                              Everyone's Bank Github Repo
                            </p>
                            <AnimationWrapper>
                              <a
                                target="_blank"
                                href="https://github.com/brianangulo/bruteforcerer"
                              >
                                <img
                                  alt="Screenshot of BruteForce It Project"
                                  src={brute}
                                  className={navImageClasses}
                                />
                              </a>{" "}
                            </AnimationWrapper>
                            <p className={classes.projectSubTitle}>
                              Brute Force It Github Repo
                            </p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <AnimationWrapper>
                              <a
                                target="_blank"
                                href="https://github.com/brianangulo/gputrackIT"
                              >
                                <img
                                  alt="Screenshot of GPUTrackIT App Project"
                                  src={gpu}
                                  className={navImageClasses}
                                />
                              </a>{" "}
                            </AnimationWrapper>
                            <p className={classes.projectSubTitle}>
                              GPUTrackIT Github Repo
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Contact Me",
                      tabIcon: ContactMailIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                              labelText="Your Name"
                              id="name"
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                value: contactName,
                                onChange: (value) => {
                                  setContactName(value.target.value);
                                },
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                              labelText="Your Email"
                              id="email"
                              title="Format: <john@doe.com>"
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                onChange: (value) => {
                                  setContactEmail(value.target.value);
                                  setEmailValidator(!regex.test(contactEmail));
                                },
                                value: contactEmail,
                                error: emailValidator,
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                            <CustomInput
                              labelText="Your Message"
                              id="message"
                              formControlProps={{
                                fullWidth: true,
                                className: classes.textArea,
                              }}
                              inputProps={{
                                multiline: true,
                                rows: 5,
                                value: contactText,
                                onChange: (value) => {
                                  setContactText(value.target.value);
                                },
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Button color="warning" onClick={handleSubmit}>
                              Send Message
                            </Button>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}