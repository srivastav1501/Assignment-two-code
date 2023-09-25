import './window.css'
import Cookies from "js-cookie";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { useNavigate } from "react-router-dom";


const Window = ({ handleDialog, open, data, setData, init, getAlw }) => {

    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);
    }

    const SetCookie = (e, data) => {
        e.preventDefault();

        const { salarySystem, moreAnnual, generousWelfare, enhancedEducation, supportSystem, reducedWorking, maternityCare, companyHousing,
            familyAllowance, employeeStock, } = data;

        if (salarySystem === "" || moreAnnual === "" || generousWelfare === "" || enhancedEducation === "" || supportSystem === "" || reducedWorking === "" || maternityCare === "" || companyHousing === ""
            || familyAllowance === "" || employeeStock === "") {
            document.querySelector(".error").innerHTML = "Fill all required fields"
        } else {
            document.querySelector(".error").innerHTML = ""

            let d = [];

            for (let prp in data) {
                let title;
                switch (prp) {
                    case 'salarySystem': title = 'Salary System Based On Meritocracy'; break
                    case 'moreAnnual': title = '120 Or More Annual Holidays'; break
                    case 'generousWelfare': title = ' Generous Welfare Benifits'; break
                    case 'enhancedEducation': title = 'Enhanced Education And Training'; break
                    case 'supportSystem': title = 'Support System For Acquriring Qualification'; break
                    case 'reducedWorking': title = 'Reduced Working Hours System'; break
                    case 'maternityCare': title = 'Maternity Care Leave System'; break
                    case 'companyHousing': title = 'Company Housing / Rent Subsidy'; break
                    case 'familyAllowance': title = 'Family Allowance'; break
                    case 'employeeStock': title = 'Employee Stock Ownership'; break
                    case 'sideJob': title = 'Side Job Available'; break
                    case 'mentorSystem': title = 'Mentor System'; break
                    case 'careerConsulting': title = 'Career Consulting'; break
                    default: title = "Dummy Title";
                }
                // console.log(title)
                if (data[prp]) {
                    let c = { title: title, value: data[prp] };
                    d = [...d, c];
                    // console.log(d)
                }
            }

            const object = JSON.stringify(d);
            Cookies.set("Allowances", object, {
                expires: + (new Date()).toDateString(),
            });

            console.log(Cookies.get("Allowances"));
            navigate('/')
            getAlw()
            setData(init)
            handleDialog()
        }

    };


    return (
        <Dialog open={open}
            PaperProps={{ sx: { width: '90%', height: "100%", maxWidth: '900px' } }}
        >
            <DialogTitle >
                <div className='title'>
                    Allowances
                    <span className='error'></span>
                    <button onClick={() => handleDialog()}>X</button>
                </div>
            </DialogTitle>

            <DialogContent>

                <div className='row'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="4em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        <FormLabel>Salary System Based On Meritocracy</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        required={true}
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='salarySystem'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="4em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        <FormLabel>120 Or More Annual Holidays</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        required
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='moreAnnual'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="4em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        <FormLabel>Generous Welfare Benifits </FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        required
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='generousWelfare'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="4em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        <FormLabel>Enhanced Education And Training </FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        required
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='enhancedEducation'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="4em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        <FormLabel>Support System For Acquriring Qualification</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        required
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='supportSystem'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="4em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        <FormLabel>Reduced Working Hours System</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        required
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='reducedWorking'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="4em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        <FormLabel>Maternity Care Leave System</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        required
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='maternityCare'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="4em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        <FormLabel>Company Housing Leave System</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        required
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='companyHousing'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="4em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        <FormLabel>Company Housing / Rent Subsidy</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        required
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='companyHousing'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="4em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        <FormLabel>Family Allowance</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        required
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='familyAllowance'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="4em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        <FormLabel>Employee Stock Ownership</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        required
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='employeeStock'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <span className='spn' > </span>
                        <FormLabel>Side Job Available</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='sideJob'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <span className='spn' > </span>
                        <FormLabel>Mentor System</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='mentorSystem'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
                <div className='row'>
                    <div>
                        <span className='spn' > </span>
                        <FormLabel>Career Consulting</FormLabel>
                    </div>
                    <RadioGroup onChange={handleChange}
                        sx={{ display: 'flex', flexDirection: 'row' }}
                        name='careerConsulting'
                    >
                        <FormControlLabel value="Yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="No" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </div>
            </DialogContent>

            <DialogActions>

                <Button
                    onClick={(e) => SetCookie(e, data)}
                    variant="contained" sx={{ width: "197px", position: "relative", right: "40%", mb: "5px" }}>
                    Submit
                </Button>

            </DialogActions>
        </Dialog>
    )
}

export default Window