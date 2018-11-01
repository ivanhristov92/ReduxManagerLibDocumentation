import React from "react";

export default ()=> (
    <>
        <div id="promo-block" className="promo-block">
            <div className="container">
                <div className="promo-block-inner">
                    <h3 className="promo-title text-center"><i className="fas fa-heart" /> <a href="https://themes.3rdwavemedia.com/bootstrap-templates/portfolio/instance-bootstrap-portfolio-theme-for-developers/" target="_blank">Made with love. Love for productivity and less frustration.</a></h3>
                    <div className="row">
                        <div className="figure-holder col-lg-5 col-md-6 col-12">
                            <div className="figure-holder-inner">
                                <a href="https://themes.3rdwavemedia.com/bootstrap-templates/portfolio/instance-bootstrap-portfolio-theme-for-developers/" target="_blank"><img className="img-fluid" src="assets/images/demo/instance-promo.jpg" alt="Instance Theme" /></a>
                                <a className="mask" href="https://themes.3rdwavemedia.com/bootstrap-templates/portfolio/instance-bootstrap-portfolio-theme-for-developers/"><i className="icon fa fa-heart pink" /></a>
                            </div>
                        </div>{/*//figure-holder*/}
                        <div className="content-holder col-lg-7 col-md-6 col-12">
                            <div className="content-holder-inner">
                                <div className="desc">
                                    <h4 className="content-title"><strong> Hi, <a href="https://github.com/ivanhristov92">Ivan</a> here. I love quality and positive work experiences. The goal - optimized turnaround time.</strong></h4>
                                    <p>If you want to work together or would like a chat about <b>Javascript</b>, <b>React</b>, Node or something more general:</p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <i className="fas fa-envelope" />
                                            <a href="mailto:ivan_hristov@mail.bg">ivan_hristov@mail.bg</a>
                                        </div>
                                        <div className="col-sm-6">
                                            <i className="fab fa-facebook-messenger" />
                                            <a href="http://m.me/ivan.hristov.77920" target="_blank">messenger</a>
                                        </div>
                                        <div className="col-sm-6">
                                            <i className="fab fa-linkedin-in" />
                                            <a href="https://www.linkedin.com/in/ivan-hristov-7b6588bb/" target="_blank">linked in</a>
                                        </div>
                                        <div className="col-sm-6">
                                            <i className="fab fa-skype" />
                                            <a href="skype:gin_n_juice?chat" target="_blank">skype</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*//desc*/}
                        </div>{/*//content-holder-inner*/}
                    </div>{/*//content-holder*/}
                </div>{/*//row*/}
            </div>{/*//promo-block-inner*/}
        </div>{/*//container*/}
    <footer id="footer" className="footer text-center">
        <div className="container">
            <small className="copyright">Designed with <i className="fas fa-heart" /> by <a href="https://themes.3rdwavemedia.com/" target="_blank">Xiaoying Riley</a> for developers</small>
        </div>
    </footer>
    </>
)