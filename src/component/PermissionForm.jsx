import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'



const PermissionForm = () => {
    const[sucessMsg, setSucessMsg] = useState('')

    const validationSchema = Yup.object().shape({
        EMPLOYEE_ID_NO: Yup.string().required('Employee no is required'),
        FIRST_NAME: Yup.string().required('First Name is required'),
        LAST_NAME: Yup.string().required('Last Name is required'),
        DEPARTMENT: Yup.string().required('Department is required'),
        CONTACT: Yup.string().required('Contact is required'),
        ADDRESS: Yup.string().required('Address is required'),
        EMERGENCY_CONTACT: Yup.string().required('Emergency Contact is required'),
        RELATIONSHIP: Yup.string().required('Relationship is required'),
        RELATIONSHIP_CONTACT: Yup.string().required('Relationship Contact is required'),
        DATE: Yup.string().required('Date is required'),
        REASONS: Yup.string().required('Reasons for satying at the facility is required'),
        STAFF_NAME: Yup.string().required('Name of staff is required'),
        SLEEP_DATE: Yup.string().required('Name of staff is required'),
        SUPERVISOR_NAME: Yup.string().required("Supervisor's Name of staff is required"),
        DESIGNATION: Yup.string().required("Designation is required"),
        APPROVED_DATE: Yup.string().required("Approved Date is required"),
        // ID_UPLOAD: Yup.string().required("You must upload your ID Card"),
      })
      const formik = useFormik({
        initialValues: {
            EMPLOYEE_ID_NO: '',
            FIRST_NAME: '',
            LAST_NAME: '',
            DEPARTMENT: '',
            CONTACT: '',
            ADDRESS: '',
            EMERGENCY_CONTACT: '',
            RELATIONSHIP: '',
            RELATIONSHIP_CONTACT: '',
            DATE: '',
            REASONS: '',
            STAFF_NAME: '',
            SLEEP_DATE: '',
            SUPERVISOR_NAME: '',
            DESIGNATION: '',
            APPROVED_DATE: '',
            // ID_UPLOAD: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log(values)
            let formData = new FormData()
            formData.append('ID_UPLOAD', formik.values.ID_UPLOAD)
            let url = 'http://localhost:5000/api/sleep_data'
            let response = await axios.post(url, values,  {
                body: formData,
                headers: {
                    'Content-TYpe' : 'application/json',
                }
            })
            console.log(response)
            setSucessMsg(response.data.msg)
            // console.log(response.data.msg)
        },
      });
  return (
    <section className='permission_form_section'>
        
    <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
      <h2 style={{color: "green", textAlign: "center", marginBottom: "1.5rem"}}>{sucessMsg}</h2>
        <div>
          <label htmlFor="EMPLOYEE_ID_NO">EMPLOYEE ID NO</label>
          <input
            type="text"
            id="EMPLOYEE_ID_NO"
            name="EMPLOYEE_ID_NO"
            value={formik.values.EMPLOYEE_ID_NO}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.EMPLOYEE_ID_NO && formik.errors.EMPLOYEE_ID_NO && <div style={{color: "red"}}>{formik.errors.EMPLOYEE_ID_NO}</div>}
        </div>

        <div>
          <label htmlFor="FIRST_NAME">FIRST NAME</label>
          <input
            type="text"
            id="FIRST_NAME"
            name="FIRST_NAME"
            value={formik.values.FIRST_NAME}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.FIRST_NAME && formik.errors.FIRST_NAME && <div style={{color: "red"}}>{formik.errors.FIRST_NAME}</div>}
        </div>


        <div>
          <label htmlFor="LAST_NAME">LAST NAME</label>
          <input
            type="text"
            id="LAST_NAME"
            name="LAST_NAME"
            value={formik.values.LAST_NAME}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.LAST_NAME && formik.errors.LAST_NAME && <div style={{color: "red"}}>{formik.errors.LAST_NAME}</div>}
        </div>

        <div>
          <label htmlFor="DEPARTMENT">DEPARTMENT</label>
          <input
            type="text"
            id="DEPARTMENT"
            name="DEPARTMENT"
            value={formik.values.DEPARTMENT}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.DEPARTMENT && formik.errors.DEPARTMENT && <div style={{color: "red"}}>{formik.errors.DEPARTMENT}</div>}
        </div>

        <div>
          <label htmlFor="contact">CONTACT</label>
          <input
            type="text"
            id="CONTACT"
            name="CONTACT"
            value={formik.values.CONTACT}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.CONTACT && formik.errors.CONTACT && <div style={{color: "red"}}>{formik.errors.CONTACT}</div>}
        </div>

        <div>
          <label htmlFor="address">PERMANENT HOUSE ADDRESS</label>
          <input
            type="text"
            id="ADDRESS"
            name="ADDRESS"
            value={formik.values.ADDRESS}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.ADDRESS && formik.errors.ADDRESS && <div style={{color: "red"}}>{formik.errors.ADDRESS}</div>}
        </div>

        <div>
          <label htmlFor="EMERGENCY_CONTACT">EMERGENCY CONTACT</label>
          <input
            type="text"
            id="EMERGENCY_CONTACT"
            name="EMERGENCY_CONTACT"
            value={formik.values.EMERGENCY_CONTACT}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.EMERGENCY_CONTACT && formik.errors.EMERGENCY_CONTACT && <div style={{color: "red"}}>{formik.errors.EMERGENCY_CONTACT}</div>}
        </div>

        <div>
          <label htmlFor="RELATIONSHIP">RELATIONSHIP</label>
          <input
            type="text"
            id="RELATIONSHIP"
            name="RELATIONSHIP"
            value={formik.values.RELATIONSHIP}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.RELATIONSHIP && formik.errors.RELATIONSHIP && <div style={{color: "red"}}>{formik.errors.RELATIONSHIP}</div>}
        </div>

        <div>
          <label htmlFor="RELATIONSHIP_CONTACT">RELATIONSHIP CONTACT</label>
          <input
            type="text"
            id="RELATIONSHIP_CONTACT"
            name="RELATIONSHIP_CONTACT"
            value={formik.values.RELATIONSHIP_CONTACT}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.RELATIONSHIP_CONTACT && formik.errors.RELATIONSHIP_CONTACT && <div style={{color: "red"}}>{formik.errors.RELATIONSHIP_CONTACT}</div>}
        </div>

        <div>
          <label htmlFor="DATE">DATE</label>
          <input
            type="date"
            id="DATE"
            name="DATE"
            value={formik.values.DATE}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.DATE && formik.errors.DATE && <div style={{color: "red"}}>{formik.errors.DATE}</div>}
        </div>

        <div>
          <label htmlFor="REASONS">REASONS FOR SLEEPING AT THE FACILITY</label>
          <input
            type="text"
            id="REASONS"
            name="REASONS"
            value={formik.values.REASONS}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.REASONS && formik.errors.REASONS && <div style={{color: "red"}}>{formik.errors.REASONS}</div>}
        </div>

        <h3 style={{textAlign: "center", margin: "1rem 0"}}>FOR SUPERVISORS ONLY</h3>
        <p>I am aware that <input style={{borderBottom: "1px solid gray"}} type="text" id="STAFF_NAME" 
            name="STAFF_NAME"
            value={formik.values.STAFF_NAME}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} placeholder='enter name of staff' /> 
            will be sleeping in the facility on 
            {formik.touched.STAFF_NAME && formik.errors.STAFF_NAME && <div style={{color: "red"}}>{formik.errors.STAFF_NAME}</div>}
            <input type="date"  id="SLEEP_DATE"
            name="SLEEP_DATE"
            value={formik.values.SLEEP_DATE}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.SLEEP_DATE && formik.errors.SLEEP_DATE && <div style={{color: "red"}}>{formik.errors.SLEEP_DATE}</div>}
        I hereby grant permission.
        </p>

        <div>
          <label htmlFor="SUPERVISOR_NAME">Supervisor Name</label>
          <input
            type="text"
            id="SUPERVISOR_NAME"
            name="SUPERVISOR_NAME"
            value={formik.values.SUPERVISOR_NAME}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.SUPERVISOR_NAME && formik.errors.SUPERVISOR_NAME && <div style={{color: "red"}}>{formik.errors.SUPERVISOR_NAME}</div>}
        </div>

        <div>
          <label htmlFor="DESIGNATION">Designation</label>
          <input
            type="text"
            id="DESIGNATION"
            name="DESIGNATION"
            value={formik.values.DESIGNATION}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.DESIGNATION && formik.errors.DESIGNATION && <div style={{color: "red"}}>{formik.errors.DESIGNATION}</div>}
        </div>

        <div>
          <label htmlFor="APPROVED_DATE">Date</label>
          <input
            type="date"
            id="APPROVED_DATE"
            name="APPROVED_DATE"
            value={formik.values.APPROVED_DATE}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.APPROVED_DATE && formik.errors.APPROVED_DATE && <div style={{color: "red"}}>{formik.errors.APPROVED_DATE}</div>}
        </div>

        {/* <div>
          <label htmlFor="signature">Signature</label>
          <input
            type="tetx"
            id="signature"
            name="signature"
            value={formik.values.signature}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.signature && formik.errors.signature && <div style={{color: "red"}}>{formik.errors.signature}</div>}
        </div> */}

        {/* <div style={{textAlign: "center"}}>
          <label style={{fontSize: "1.2rem", textTransform: "uppercase", fontWeight: "500"}} htmlFor="ID_UPLOAD">Upload the staff Id Card</label>
          <input
          style={{display: "block"}}
            type="file"
            id="ID_UPLOAD"
            name="ID_UPLOAD"
            value={formik.values.ID_UPLOAD}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.ID_UPLOAD && formik.errors.ID_UPLOAD && <div style={{color: "red"}}>{formik.errors.ID_UPLOAD}</div>}
        </div> */}

        <button  className='submit_btn' type="submit">Submit</button>
        
    </form>
    </section>
  )
}

export default PermissionForm




