import './right.css'
import Cookies from "js-cookie";
import { Button, TextField, InputLabel, FormControl, FormControlLabel, RadioGroup, FormLabel, Radio } from '@mui/material';
import Inputbox from './Inputbox';
import { useNavigate } from "react-router-dom";

const Form = ({ data, setData, init, getForm }) => {


    const navigate = useNavigate();
    const SetCookie = (e, data) => {
        e.preventDefault();
        let d = [];

        for (let prp in data) {
            let title;
            switch (prp) {
                case 'bDescription': title = 'Business Description'; break
                case 'cPhilosophy': title = 'Corporate Philosophy'; break
                case 'cName': title = 'Company Name'; break
                case 'Industry': title = 'Industry'; break
                case 'MailID': title = 'Mail ID'; break
                case 'pNumber': title = 'Phone Number'; break
                case 'Location': title = 'Location'; break
                case 'Website': title = 'Website'; break
                case 'wHours': title = 'Working Hours'; break
                case 'eDate': title = 'Establishment Date'; break
                case 'itCapital': title = 'Initial Capital1'; break
                case 'Representative': title = 'Representative'; break
                case 'Branch': title = 'Branch'; break
                case 'nfEmployees': title = 'Number Of Employees'; break
                case 'sRevenue': title = 'Sales Revenue'; break
                case 'oProfit': title = 'Operation Profit'; break
                case 'aafEmployees': title = 'Average Age of Emploies'; break
                case 'Stock': title = 'Stock'; break
                case 'LinkedinLink': title = 'Linkedin Link'; break
                case 'TwitterLink': title = 'Twitter Link'; break
                case 'FacebookLink': title = 'Facebook Link'; break
                case 'InstagramLink': title = 'Instagram Link'; break
                case 'YoutubeLink': title = 'Youtube Link'; break
                case 'fOwned': title = 'Foreign Owned'; break
                default: title = "Dummy Title";
            }
            // console.log(title)
            if (data[prp]) {
                let c = { title: title, value: data[prp] };
                d = [...d, c];
                // console.log(d)
            }
        }
        const obj = JSON.stringify(d);
        Cookies.set("formData", obj, {
            expires: + (new Date()).toDateString()
        })
        getForm()
        setData(init);
        navigate('/')
    }

    // console.log(Cookies.get("formData"));


    return (
        <div className="right">
            <form className='form' onSubmit={(e) => { SetCookie(e, data) }}>
                <div className='rw-1' >
                    <FormControl style={{ width: "48%" }}>
                        <InputLabel style={{ marginLeft: "-12px" }} size='string' >Business Description
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="red" fontSize="10px" height="1em" width="2em" xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        </InputLabel>

                        <TextField style={{
                            width: "100%",
                            marginTop: "37px"
                        }}
                            value={data.bDescription}
                            onChange={(e) => { setData({ ...data, bDescription: e.target.value }); console.log(data) }}
                            variant='outlined'
                            multiline={true}
                            rows={3}
                            autoComplete="off"
                            required />

                    </FormControl>

                    <FormControl className="input-top" style={{ marginLeft: "4%", width: "48%" }}>
                        <InputLabel style={{ marginLeft: "-12px" }} >Corporate Philosophy</InputLabel>

                        <TextField style={{
                            width: "100%",
                            marginTop: "37px"

                        }}
                            value={data.cPhilosophy}
                            onChange={(e) => { setData({ ...data, cPhilosophy: e.target.value }); console.log(data) }}
                            variant='outlined'
                            multiline={true}
                            rows={3}
                            autoComplete="off"
                        />

                    </FormControl>

                </div>

                <div className='rw' >

                    <Inputbox required name={'cName'} title={"Company Name"} type={"text"} data={data} setData={setData} />
                    <Inputbox name={'Industry'} title={"Industry"} middle type={"text"} data={data} setData={setData} />
                    <Inputbox required name={'MailID'} title={"Mail Id"} type={"email"} data={data} setData={setData} />
                </div>
                <div className='rw'  >

                    <Inputbox required name={'pNumber'} title={"Phone Number"} type={"text"} data={data} setData={setData} />
                    <Inputbox required name={'Location'} title={"Location"} middle type={"text"} data={data} setData={setData} />
                    <Inputbox name={'Website'} title={"Website"} type={"url"} data={data} setData={setData} />
                </div>
                <div className='rw'>
                    <Inputbox required name={'wHours'} title={"Working Hours"} type={"number"} data={data} setData={setData} />
                    <Inputbox required name={'eDate'} title={"Establishment Date "} middle type={"date"} data={data} setData={setData} />
                    <Inputbox required name={'itCapital'} title={"Initial Capital"} type={"number"} data={data} setData={setData} />
                </div>
                <div className='rw'  >
                    <Inputbox required name={'Representative'} title={"Representative"} type={"text"} data={data} setData={setData} />
                    <Inputbox required name={'Branch'} title={"Branch"} middle type={"text"} data={data} setData={setData} />
                    <Inputbox required name={'nfEmployees'} title={"Number Of Employees "} type={"number"} data={data} setData={setData} />
                </div>
                <div className='rw'  >
                    <Inputbox name={'sRevenue'} title={"Sales Revenue"} type={"number"} data={data} setData={setData} />
                    <Inputbox name={'oProfit'} title={"Operation Profit"} middle type={"number"} data={data} setData={setData} />
                    <Inputbox name={'aafEmployees'} title={"Avrage Age Of Employees"} type={"number"} data={data} setData={setData} />
                </div>
                <div className='rw'  >
                    <Inputbox name={'Stock'} title={"Stock"} type={"number"} data={data} setData={setData} />
                    <Inputbox name={'LinkedinLink'} title={"Linkedin Link"} middle type={"url"} data={data} setData={setData} />
                    <Inputbox name={'TwitterLink'} title={"Twitter Link"} type={"url"} data={data} setData={setData} />
                </div>
                <div className='rw'  >
                    <Inputbox name={'FacebookLink'} title={"Facebook Link"} type={"url"} data={data} setData={setData} />
                    <Inputbox name={'InstagramLink'} title={"Instagram Link"} middle type={"url"} data={data} setData={setData} />
                    <Inputbox name={"YoutubeLink"} title={"Youtube Link"} type={"url"} data={data} setData={setData} />
                </div>

                <FormControl sx={{ mt: "18px" }}>
                    <FormLabel>Foreign Owned</FormLabel>
                    <RadioGroup
                        defaultValue={null} sx={{ display: 'flex', flexDirection: 'row' }}
                        onChange={(e) => { setData({ ...data, fOwned: e.target.value }); console.log(data) }}
                    >
                        <FormControlLabel value="yes" control={<Radio />}
                            label="Yes" />
                        <FormControlLabel value="no" control={<Radio />}
                            label="No" />
                    </RadioGroup>
                </FormControl>

                <Button
                    variant="contained" type="submit" sx={{ width: "197px", position: 'absolute', botton: "-40px", right: "40%" }}>
                    Save
                </Button>
            </form >
        </div>
    )
}

export default Form;