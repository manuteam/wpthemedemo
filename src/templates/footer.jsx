import * as React from 'react'
import {NavLink} from "react-router-dom"
import footerData from './template-parts/jsonData/footer.json'
import {Component} from "react"
import {ChevronRight, Facebook, Image, Instagram, Linkedin, Mail, Twitter} from 'react-feather'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerData,
            socials: footerData.socials,
            company: footerData.company,
            usefulLinks: footerData.usefulLinks,
            newsletter: footerData.newsletter,
            payments: footerData.bottom.payments
        }
    }

    render() {

        let { footerData, socials, company, usefulLinks, newsletter, payments } = this.state

        let getSocialsIcon = (socialTitle) => {
            switch (socialTitle) {
                case 'facebook':
                    return <Facebook size={16}/>
                case 'instagram':
                    return <Instagram size={16}/>
                case 'twitter':
                    return <Twitter size={16}/>
                case 'linkedin':
                    return <Linkedin size={16}/>
                default:
                    return <Image size={16}/>
            }
        }

        return (
            <footer className="footer footer-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-py-60">
                                <div className="row">
                                    <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                        <NavLink to="/" className="logo-footer">

                                            {footerData.logo.map(item => (
                                                <img src={rootSettings.URL.build + `${item.image}`} height="24" className={item.class} alt=""/>
                                            ))}

                                        </NavLink>
                                        <p className="mt-4">{footerData.text}</p>
                                        <ul className="list-unstyled social-icon social mb-0 mt-4">

                                            {socials.map(item => (
                                                <li className="list-inline-item me-2">
                                                    <a href={item.link} className="rounded">
                                                        {getSocialsIcon(item.dataFeather)}
                                                    </a>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>

                                    <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <h5 className="footer-head">{company.title}</h5>
                                        <ul className="list-unstyled footer-list mt-4">

                                            {company.linksArray.map(item => (
                                                <li>
                                                    <a href={item.url} className="text-foot">
                                                        <ChevronRight size={16} className="me-1"/> {item.title}
                                                    </a>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>

                                    <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <h5 className="footer-head">{usefulLinks.title}</h5>
                                        <ul className="list-unstyled footer-list mt-4">

                                            {usefulLinks.linksArray.map(item => (
                                                <li>
                                                    <a href={item.url} className="text-foot">
                                                        <ChevronRight size={16} className="me-1"/> {item.title}
                                                    </a>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>

                                    <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <h5 className="footer-head">{newsletter.title}</h5>
                                        <p className="mt-4">{newsletter.text}</p>
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="foot-subscribe foot-white mb-3">
                                                        <label className="form-label">{newsletter.form.label} <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <Mail size={16} className="me-1 icons"/>
                                                            <input type="email" name="email" id="emailsubscribe" className="form-control border ps-5 rounded" placeholder={newsletter.form.email.placeholder} required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="d-grid">
                                                        <input type="submit" id="submitsubscribe" name="send" className="btn btn-primary" value="Subscribe" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-py-30 bg-footer text-white-50 border-top">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="text-sm-start">
                                    <p className="mb-0">
                                        © {new Date().getFullYear()} {footerData.bottom.copyright}
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul className="list-unstyled text-sm-end mb-0">

                                    {payments.map(item => (
                                        <li className="list-inline-item me-2">
                                            <a href={item.link}>
                                                <img src={rootSettings.URL.build + `${item.image}`} className="avatar avatar-ex-sm" title={item.title} alt="" />
                                            </a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;