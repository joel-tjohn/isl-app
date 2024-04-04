import React from 'react'
import Navbar from './Navbar'

const Add = () => {
    return (
        <div>

            <div className="container">

                <Navbar />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                        <row>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <font size="38">

                                    <p>Details of the Club </p>

                                </font>


                                <label for="" class="form-label">Link of The Club Logo Image</label>
                                <input type="text" class="form-control"/>
                                   



                                        <label for="" class="form-label">Description</label>
                                        <input type="text" class="form-control"/>



                                            <font size="38">

                                                <p>Your Details </p>

                                            </font>



                                            <label for="" class="form-label">First Name</label>
                                            <input type="text" class="form-control" />


                                            <label for="" class="form-label">Second Name</label>
                                            <input type="text" class="form-control" />


                                            <label for="" class="form-label">Phone Number</label>
                                            <input type="phonenumber" class="form-control" />


                                            <label for="" class="form-label">Email ID</label>
                                            <input type="email" class="form-control" />
                                            <br />


                                            <button class="btn btn-success">Submit</button>


                                        </div>
                                    </row>


                                    </div>
                            </div>
                    </div>


                </div>
                )
}

                export default Add

