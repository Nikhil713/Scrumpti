import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div>
            <footer>
                <div class="footerDiv">
                    <div class="linksBlock">
                        <div class="COMPANY">
                            <a id = "company">COMPANY</a>
                            <a>About Us</a>
                            <a>Jobs</a>
                            <a>Contact</a>
                        </div>

                        <div class="INFO">
                            <a id = "links">LINKS</a>
                            <a>FAQs</a>
                            <a>Support</a>
                            <a>Legal</a>
                        </div>

                        <div class="BENEFITS">
                            <a id = "benefits">BENEFITS</a>
                            <a>Refer A Friend</a>
                            <a>Redeem Code</a>
                            <a>Add A Referral Code</a>
                        </div>

                        <div class="BLOG">
                            <a id = "blogs">BLOGS</a>
                            <a>Food 52</a>
                            <a>Serious Eats</a>
                            <a>Food For Thought</a>
                        </div>
                    </div>
                </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
