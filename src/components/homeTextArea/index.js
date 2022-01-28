import React, { useState } from 'react';

import Typing from 'react-typing-animation';

import {Link} from 'react-router-dom';

import {
    Container,
    // Title,
    Sub, Span, 
    Paragraph, 
    Button, 
    OtherTitles,
    Subtitle} from './styles';

export default function HomeText({home,pre, title, subtitle, children}) {
    
    const [actived, setActived] = useState(false);
    
    return (
        <Container>
            <Typing
                cursorClassName="custom"
                cursor={<span>_</span>}
                speed={80}
                onFinishedTyping={() => setActived(true)}
            >
                {!home ? (
                <React.Fragment>
                    <OtherTitles>{title}</OtherTitles>
                </React.Fragment>
                ) : pre ? (
                <React.Fragment>
                    <Typing.Speed ms={80} />
                    {pre.split("").map(char => {
                    switch (char) {
                        case "~":
                        return <br key={Math.random()} />;
                        case "":
                        return " ";
                        case " ":
                        return " ";
                        default:
                        return (
                            <Span key={Math.random()} name="rubberBand">
                            {char}
                            </Span>
                        );
                    }
                    })}

                    <Typing.Backspace count={39} delay={100} speed={30} />
                    <Typing.Speed ms={50} />

                    {title.split("").map(char => {
                    switch (char) {
                        case "~":
                        return <br key={Math.random()} />;
                        case "":
                        return " ";
                        case " ":
                        return " ";
                        default:
                        return (
                            <Span key={Math.random()} name="rubberBand">
                            {char}
                            </Span>
                        );
                    }
                    })}
                </React.Fragment>
                ) : (
                <React.Fragment>
                    <Typing.Speed ms={50} />
                    {title.split("").map(char => {
                    switch (char) {
                        case "~":
                        return <br key={Math.random()} />;
                        case "":
                        return " ";
                        case " ":
                        return " ";
                        default:
                        return (
                            <Span key={Math.random()} name="rubberBand">
                            {char}
                            </Span>
                        );
                    }
                    })}
                </React.Fragment>
                )}
            </Typing>
                    {home && <Sub className={actived && "active"}>{subtitle}</Sub>}
                    {!home && !children && (
                        <Subtitle className="fast" size="18px">
                            {subtitle}
                        </Subtitle>
                    )}
                    {home && (
                        <Link to="contact">
                            <Button className={actived && "active"}>Hire Me</Button>
                        </Link>
                    )}
                    <Paragraph>{children}</Paragraph>
        </Container>
    );  
}