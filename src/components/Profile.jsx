

function ProfileInputs(){

    return(
        <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded    profile-form">
            <div class="shadow p-3 mb-4 bg-body-tertiary rounded text text-primary text-center fs-2">Personal Details</div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <div className="col-auto">
                       <label  className="col-form-label">Firstname</label>
                    </div>
                       <input type="text" className="form-control name" placeholder="firstname"></input>
                </div>
                <div className="col-auto sir">
                    <div className="col-auto ">
                     <label  className="col-form-label">Sirname</label>
                     </div>
                     <div className="col-auto">
                   <input type="text"  className="form-control name"  placeholder="sirname"></input>
                </div>
                </div>
              
            </div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <div className="col-auto">
                       <label  className="col-form-label">Email</label>
                    </div>
                       <input type="text" className="form-control name" placeholder="email"></input>
                </div>
                <div className="col-auto sir">
                    <div className="col-auto ">
                     <label  className="col-form-label">Phone Number</label>
                     </div>
                     <div className="col-auto">
                   <input type="number"  className="form-control name"  placeholder="phone number"></input>
                </div>
                </div>
              
            </div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <div className="col-auto">
                       <label  className="col-form-label">Facebook</label>
                    </div>
                       <input type="text" className="form-control name" placeholder="facebook"></input>
                </div>
                <div className="col-auto sir">
                    <div className="col-auto ">
                     <label  className="col-form-label">Instagram</label>
                     </div>
                     <div className="col-auto">
                   <input type="text"  className="form-control name"  placeholder="instagram"></input>
                </div>
                </div>
              
            </div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <div className="col-auto">
                       <label  className="col-form-label">Linked In</label>
                    </div>
                       <input type="text" className="form-control name" placeholder="linked in"></input>
                </div>
                <div className="col-auto sir">
                    <div className="col-auto ">
                     <label  className="col-form-label">Github</label>
                     </div>
                     <div className="col-auto">
                   <input type="text"  className="form-control name"  placeholder="github"></input>
                </div>
                </div>
              
            </div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <div className="col-auto">
                       <label  className="col-form-label">Address</label>
                    </div>
                       <input type="text" className="form-control name" placeholder="address"></input>
                </div>
                <div className="col-auto sir">
                    <div className="col-auto ">
                     <label  className="col-form-label">Country</label>
                     </div>
                     <div className="col-auto">
                   <input type="text"  className="form-control name"  placeholder="country"></input>
                </div>
                </div>
              
            </div>
            <div className="row align-items-center">
                <div className="col-auto">
                <button type="button" class="btn back  btn-secondary">back</button>
                    
                </div>
                <div className="col-auto sir">
                <button type="button" class="btn next btn-danger">Next </button>
                    
                </div>
              
            </div>
           <div className="page">
            <h6>Page 1</h6>
           </div>
        </div>
    
        
    )

}
export default ProfileInputs;
