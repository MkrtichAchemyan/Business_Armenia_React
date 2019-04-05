import React, { Component } from 'react'
import img_1 from '../../assets/images/captcha.png'


class Contacts extends Component{

  render(){
    return(
      <>
        <div className="all-content">
          <div className="container">


            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <p>Կապ</p>
                </div>
              </div>
              <div className="page-description container">
                <p>
                  Եթե ունեք բիզնես հարցումներ կամ այլ հարցեր, խնդրում ենք լրացնել հետեւյալ հայտաձեւը մեզ հետ կապ
                  հաստատելու համար: Շնորհակալություն: </p>
                <div className="row">
                  <div className="col-md-6">

                    <form id="contact-form" action="/contact" method="post">
                      <input type="hidden" name="_csrf-frontend" value="cR7uTM3HNRPn_JdBYJHNJgdw4yCtwLDgz-TGAGGOePA3eJk2grV3e6yfpisI15QXQD6ZEPSN6oH-1altLfYBhA==" />
                        <div className="form-group field-contactform-first_name required">
                          <label className="control-label" htmlFor="contactform-first_name">
                            Անուն
                            <span className="red-asterix">*</span>
                          </label>
                          <input type="text" id="contactform-first_name" className="form-control" name="ContactForm[first_name]" autoFocus="" aria-required="true" />
                          <p className="help-block help-block-error"></p>
                        </div>
                        <div className="form-group field-contactform-last_name required">
                          <label className="control-label" htmlFor="contactform-last_name">
                            Ազգանուն
                            <span className="red-asterix">*</span>
                          </label>
                          <input type="text" id="contactform-last_name" className="form-control" name="ContactForm[last_name]" autoFocus="" aria-required="true" />

                            <p className="help-block help-block-error"></p>
                        </div>
                        <div className="form-group field-contactform-email required">
                          <label className="control-label" htmlFor="contactform-email">
                            Էլ. հասցե
                            <span className="red-asterix">*</span>
                          </label>
                          <input type="text" id="contactform-email" className="form-control" name="ContactForm[email]" aria-required="true"/>

                            <p className="help-block help-block-error"></p>
                        </div>
                        <div className="form-group field-contactform-message required">
                          <label className="control-label" htmlFor="contactform-message">
                            Մանրամասներ
                          </label>
                          <textarea id="contactform-message" className="form-control" name="ContactForm[message]" rows="6" aria-required="true"></textarea>
                          <p className="help-block help-block-error"></p>
                        </div>
                        <div className="form-group field-contactform-verifycode">
                          <label className="control-label" htmlFor="contactform-verifycode">Verification Code</label>
                          <div className="row">
                            <div className="col-lg-3">
                              <img id="contactform-verifycode-image" src={img_1} alt="" />
                            </div>
                            <div className="col-lg-6">
                              <input type="text" id="contactform-verifycode" className="form-control" name="ContactForm[verifyCode]" />
                            </div>
                          </div>

                          <p className="help-block help-block-error"></p>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-my" name="contact-button">Ուղարկել</button>
                        </div>
                    </form>
                  </div>

                  <div className="col-md-6">
                    <iframe id="contact-us-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6097.105527411302!2d44.50827872526997!3d40.17451034092495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd9695bc6267%3A0xf083f4c3ce825d85!2sBusiness+Armenia!5e0!3m2!1sen!2s!4v1533041203080"
                            width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" title="unique">
                    </iframe>
                    <div>
                      <p className="phone_img">
                        <i className="fas fa-phone"></i> 8988 (տեղական զանգեր)
                      </p>
                      <p className="phone_img">
                        <i className="fas fa-phone"></i> +37411597888 (միջազգային զանգեր)
                      </p>
                      <p className="mail_img">
                        <i className="far fa-envelope"></i>
                        <a href="mailto:invest@businessarmenia.am">invest@businessarmenia.am</a></p>
                      <p className="pin_img">
                        <i className="fas fa-location-arrow"></i> ՀՀ Երեւան, Մհեր Մկրտչյան 5
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Contacts