import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
} from 'mdb-react-ui-kit';
import "./Newpro.css";




const Newpro = () => {
    return (
        <>
            <h1 id="projects" className="text-center text-light my-5">Projects</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <MDBCard alignment='center' background='dark' className='text-white mb-3'>
                            <MDBCardHeader>Featured</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle className='pro_heading'>Weather API</MDBCardTitle>
                                <MDBCardText>Implemented the WEATHER API using Async/Await with fetch concepts.This project is created to show the weather condition,temperature,humidity for all over countries/cities</MDBCardText>
                                <MDBBtn href='https://amazing-pithivier-c1ad34.netlify.app/' target="_blank">for information</MDBBtn>
                            </MDBCardBody>
                            <MDBCardFooter className='text-muted pro_heading'>updated just now...</MDBCardFooter>
                        </MDBCard>
                    </div>


                    <div className="col-md-3">
                        <MDBCard alignment='center' background='dark' className='text-white mb-3'>
                            <MDBCardHeader>Featured</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle className='pro_heading'>BREWERY API</MDBCardTitle>
                                <MDBCardText>Implemented the Brewery API using Async/Await with fetch concepts.This project is created for searching the Breweries name by its brand or barrel name for more information just click</MDBCardText>
                                <MDBBtn href='https://glowing-wisp-c98dbb.netlify.app/' target="_blank">for information</MDBBtn>
                            </MDBCardBody>
                            <MDBCardFooter className='text-muted pro_heading'>updated just now...</MDBCardFooter>
                        </MDBCard>
                    </div>


                    <div className="col-md-3">
                        <MDBCard alignment='center' background='dark' className='text-white mb-3'>
                            <MDBCardHeader>Featured</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle className='pro_heading'>CALCULATOR</MDBCardTitle>
                                <MDBCardText>Implemented the CALCULATOR using Advanced java script concepts.This project is created for performing mathematical operations like Add,Sub,Mul,Div for more information just click</MDBCardText>
                                <MDBBtn href='https://magenta-meringue-d39078.netlify.app/' target="_blank">for information</MDBBtn>
                            </MDBCardBody>
                            <MDBCardFooter className='text-muted pro_heading'>updated just now...</MDBCardFooter>
                        </MDBCard>
                    </div>


                    <div className="col-md-3">
                        <MDBCard alignment='center' background='dark' className='text-white mb-3'>
                            <MDBCardHeader>Featured</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle className='pro_heading'>GOOGLE FORMS</MDBCardTitle>
                                <MDBCardText>Implemented the GOOGLE FORMS using Advanced java script concepts.This project is created like we enterd the data it will store data in the form itself for more information just click</MDBCardText>
                                <MDBBtn href='https://astounding-tarsier-8c046b.netlify.app/' target="_blank">for information</MDBBtn>
                            </MDBCardBody>
                            <MDBCardFooter className='text-muted pro_heading'>updated just now...</MDBCardFooter>
                        </MDBCard>
                    </div>


                    <div className="col-md-3">
                        <MDBCard alignment='center' background='dark' className='text-white mb-3'>
                            <MDBCardHeader>Featured</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle className='pro_heading'>CAT API</MDBCardTitle>
                                <MDBCardText>Implemented the CAT API using Async/Await with fetch concepts.This project is created for searching the CAT name by its breed name for more information just click</MDBCardText>
                                <MDBBtn href='https://eclectic-mochi-3ac4cc.netlify.app/' target="_blank">for information</MDBBtn>
                            </MDBCardBody>
                            <MDBCardFooter className='text-muted pro_heading'>updated just now...</MDBCardFooter>
                        </MDBCard>
                    </div>


                    <div className="col-md-3">
                        <MDBCard alignment='center' background='dark' className='text-white mb-3'>
                            <MDBCardHeader >Featured</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle className='pro_heading'>MOBILE API</MDBCardTitle>
                                <MDBCardText>Implemented the MOBILE API using Async/Await with fetch concepts.This project is created for searching the MOBILE name by its brand name or model name for more information just click</MDBCardText>
                                <MDBBtn href='https://ephemeral-biscochitos-de8078.netlify.app/' target="_blank">for information</MDBBtn>
                            </MDBCardBody>
                            <MDBCardFooter className='text-muted pro_heading'>updated just now...</MDBCardFooter>
                        </MDBCard>
                    </div>


                    <div className="col-md-3">
                        <MDBCard alignment='center' background='dark' className='text-white mb-3'>
                            <MDBCardHeader>Featured</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle className='pro_heading'>ADD TO CART</MDBCardTitle>
                                <MDBCardText>This Project is created by React JS. It  is  used to display  the  total  amount of the product and Add to cart button like an amazon and flipcart to know more infomation just click</MDBCardText> <br/>
                                <MDBBtn href='https://statuesque-pika-a70a87.netlify.app/' target="_blank">for information</MDBBtn>
                            </MDBCardBody>
                            <MDBCardFooter className='text-muted pro_heading'>updated just now...</MDBCardFooter>
                        </MDBCard>
                    </div>


                    


                   





                </div>
            </div>
        </>
    )
}
export default Newpro;