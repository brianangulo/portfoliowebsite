import React, { useState } from "react";
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

//Projects screenshots
import ebank from "assets/img/projects/ebank.png";
import gpu from "assets/img/projects/gpu.png";
import brute from "assets/img/projects/bf.png";

//Hovering library
import { AnimationWrapper } from "react-hover-animation";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

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
  const [contactName, setContactName] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [contactText, setContactText] = useState();

  //Node Mailer to come here below --->>

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
                                onChange: (value) => {
                                  setContactName(value.target.value);
                                  console.log(contactName);
                                },
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                              labelText="Your Email"
                              id="email"
                              formControlProps={{
                                fullWidth: true,
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
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
                                onChange: (value) => {
                                  setContactText(value.target.value);
                                  console.log(contactText);
                                },
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Button color="warning">Send Message</Button>
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
