import React from 'react';
import Reveal from 'react-reveal';
import { Link } from 'react-router-dom';
import 'animate.css';



export default function Blocks(props) {

    const showBlocks = ({ blocks }) => {
        if (blocks) {
            const homeBlocks = {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: '40px'
            }
            return (
                <Reveal effect="animated fadeInUp delay-2s" >
                    <div style={homeBlocks}>
                        {blocks.map(item => {
                            return (
                                <div key={item.id} className={`item ${item.type}`}>
                                    <div className="veil"></div>
                                    <div className="image" style={{ background: `url(/images/blocks/${item.image})no-repeat` }}></div>
                                    <div className="title">
                                        <Link to={item.link}>{item.title}</Link>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </Reveal>
            )
        }

    }


    return (
        <div>
            {showBlocks(props)}
        </div>
    )
}
