import React from 'react'
import Navbar from './Navbar'

const Search = () => {
    return (
        <div>

            <div className="container">


               <Navbar/>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">








                        <font size="38">

                            <p>Search Club </p>

                        </font>



                        <label for="" class="form-label">Search with Club Name</label>
                        <input type="text" class="form-control" />


                       
                        <br />
                        <button class="btn btn-success">Search</button>




                    </div>
                </div>
            </div>





        </div>
    )
}

export default Search

