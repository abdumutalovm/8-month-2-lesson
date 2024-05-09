import leftArr from '../assets/arrow-left.svg'
import rightArr from '../assets/arrow-right.svg'
import { useState } from 'react';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useRef } from 'react';
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import square from '../assets/add-square.svg'
import iphone from '../assets/iphone.png'
import clock from '../assets/clock.svg'

const Separator = styled('div')(
    ({ theme }) => `
    height: ${theme.spacing(3)};
  `,
);

const marks = [
    { value: 13, label: '13:00' },
    { value: 14, label: '14:00' },
    { value: 15, label: '15:00' },
    { value: 16, label: '16:00' },
    { value: 17, label: '17:00' },
    { value: 18, label: '18:00' },
    { value: 19, label: '19:00' },
    { value: 20, label: '20:00' },
    { value: 21, label: '21:00' },
    { value: 22, label: '22:00' },
    { value: 23, label: '23:00' },
    { value: 24, label: '00:00' },
    { value: 1, label: '01:00' },
    { value: 2, label: '02:00' },
    { value: 3, label: '03:00' },
    { value: 4, label: '04:00' },
    { value: 5, label: '05:00' },
    { value: 6, label: '06:00' },
    { value: 7, label: '07:00' },
    { value: 8, label: '08:00' },
    { value: 9, label: '09:00' },
    { value: 10, label: '10:00' },
    { value: 11, label: '11:00' },
    { value: 12, label: '12:00' },
];


function valuetext(value) {
    return `${value}`;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Main() {
    const projectNameRef = useRef(null);
    const tagRef = useRef(null);
    const startTime = useRef(null);
    const sendTime = useRef(null);
    const [range, setRange] = useState([3, 17]);
    const shablonRef = useRef(null);
    const linkRef = useRef(null)
    const [language, setLanguage] = useState('');
    const [showTextArea, setShowTextArea] = useState(false);
    const [sms, setSms] = useState('Habar...');

    function handleAboutAll(e) {
        e.preventDefault();
        const formData = {
            projectName: projectNameRef.current.value,
            tag: tagRef.current.value,
            startTime: startTime.current.value,
            sendTime: sendTime.current.value,
            range: range,
            shablon: shablonRef.current.value,
            link: linkRef.current.value,
            language: language,
            showTextArea: showTextArea,
            sms: sms
        }
        console.log('Forma Malumotlari', formData);
    }

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        setShowTextArea(true);
    };

    const handleChange = (event, newValue) => {
        setRange(newValue);
    };




    return (
        <div className='w-[1492px] mx-auto border rounded-xl px-[16px] py-[30px]'>

            <div className='flex items-center border border-l-0 border-r-0 border-t-0 pb-4 justify-between mb-6'>
                <div className='flex items-center gap-6 font-semibold text-2xl text-[#171725]'>
                    <a href="#" className='flex items-center gap-6'><img src={leftArr} alt="" /><h1>Subloyiha ochish</h1></a>
                </div>
                <button onClick={handleAboutAll} className='px-5 text-white font-semibold text-base rounded-xl  py-3 bg-blue-500 flex items-center gap-2 hover:opacity-80'>Davom etish <img src={rightArr} alt="" /></button>
            </div>

            <div>

                <div className='flex items-center gap-[16px]'>
                    <div className='flex flex-col'>
                        <label htmlFor="loyiha" className='mb-4'>Loyiha nomi</label>
                        <input id='loyiha' type="text" ref={projectNameRef} placeholder='Loyiha nomi' className='bg-[#FBFAFC] px-[12px] py-[15px] w-[722px] border rounded outline-blue-500' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <label htmlFor='tag' className='w-[722px] mb-2 outline-blue-500'>
                            Tag
                        </label>
                        <select name="" ref={tagRef} id="tag" className='bg-[#FBFAFC] px-[12px] mt-2 py-[15px] w-[722px] border rounded outline-blue-500'>
                            <option value="tag">Tag</option>
                            <option value="Erkak">Erkak</option>
                            <option value="Bolalar">Bolalar</option>
                            <option value="Ayol">Ayol</option>
                        </select>
                    </div>

                </div>

                <div className='mt-8 flex items-center'>

                    <div className=' w-[1450px] text-left flex items-center'>
                        <div className='flex items-center'>
                            <Checkbox
                                id='check1'
                                {...label}
                                defaultChecked
                                sx={{
                                    color: green[300],
                                    width: 24,
                                    height: 24,
                                    marginRight: 1,
                                    '&.Mui-checked': {
                                        color: green[300],
                                    },
                                }}
                            />
                            <label htmlFor="check1" className='font-[500] text-[14px] cursor-pointer leading-6 text-[#504F54]'>Boshlanish vaqti</label>
                        </div>

                        <div className='flex items-center justify-between ml-[600px]'>
                            <Checkbox
                                id='check2'
                                {...label}
                                defaultChecked
                                sx={{
                                    color: green[300],
                                    width: 24,
                                    height: 24,
                                    marginRight: 1,
                                    '&.Mui-checked': {
                                        color: green[300],
                                    },
                                }}
                            />
                            <label htmlFor="check2" className='font-[500] text-[14px] cursor-pointer leading-6 text-[#504F54]'>Qancha vaqtda habar yuboriladi?</label>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <input id='loyiha' type="text" placeholder='Boshlanish vaqti' ref={startTime} className='mt-2 bg-[#FBFAFC] px-[12px] py-[15px] w-[722px] border rounded relative outline-blue-500' />
                    <img src={clock} className='absolute ml-[690px] mt-2 w-[18px]' alt="" />
                    <select name="" id="" ref={sendTime} className='bg-[#FBFAFC] px-[12px] mt-2 py-[15px] w-[722px] border rounded outline-blue-500'>
                        <option value="o'sha zahoti">O'sha zahoti</option>
                        <option value="5 daqiqadan so'ng">5 daqiqadan so'ng</option>
                        <option value="30 daqiqadan so'ng">30 daqiqadan so'ng</option>
                        <option value="1 soatdan so'ng">1 soatdan so'ng</option>
                    </select>
                </div>

                <div className='mt-[32px]'>
                    <Checkbox
                        id='check3'
                        {...label}
                        defaultChecked
                        sx={{
                            color: green[300],
                            width: 24,
                            height: 24,
                            marginRight: 1,
                            '&.Mui-checked': {
                                color: green[300],
                            },
                        }}
                    />
                    <label htmlFor="check3" className='font-[500] text-[14px] cursor-pointer leading-6 text-[#504F54]'>Habar yuborilmaydigan vaqt</label>
                </div>

                <div className='timeLine ml-8 mb-6'>

                    <Separator />
                    <Typography id="track-inverted-range-slider" gutterBottom>
                        Inverted track range
                    </Typography>
                    <Slider
                        sx={{ width: '96%' }}
                        value={range}
                        onChange={handleChange}
                        getAriaValueText={valuetext}
                        marks={marks}
                        step={1}
                        min={1}
                        max={24}
                        valueLabelDisplay="auto"
                        aria-labelledby="time-range-slider"
                    />
                </div>

                <div className='bg-[#F8F8F8] p-[24px] flex rounded-xl border'>
                    <div className='about w-[862px]'>
                        <form className='flex flex-col'>
                            <h1 className='text-[24px] leading-7 font-bold text-[#171725 mb-[20px]'>Habarning ko’rinishi</h1>
                            <label htmlFor="shablon" className='font-bold text-[16px] text-[#44444F mb-[9px]'>Shablon</label>
                            <select name="" ref={shablonRef} id="shablon" className='px-3 py-3 rounded-md outline-blue-500 mb-3 border'>
                                <option value="Shablon">Shablon</option>
                                <option value="shablon2">Shablon2</option>
                            </select>
                            <label htmlFor="link" ref={linkRef} className='font-bold text-[16px] text-[#44444F mb-[9px]'>Link</label>
                            <input type="text" placeholder='Link' className='px-3 py-3 rounded-md  outline-blue-500 mb-3 border' />
                            <div className='flex items-center justify-between'>
                                <label htmlFor="habar" className='font-bold text-[16px] text-[#44444F mb-[9px]'>Habar</label>
                                <div className=' gap-1 flex items-center cursor-pointer mb-3'>
                                    <img src={square} alt="" />
                                    <h1 className='text-blue-500'>Shablon holatida saqlash</h1>
                                </div>
                            </div>
                            <Select value={language} onChange={handleLanguageChange}>
                                <MenuItem value={'en'}>English</MenuItem>
                                <MenuItem value={'ru'}>Русский</MenuItem>
                                <MenuItem value={'uz'}>O'zbekcha</MenuItem>
                            </Select>
                            {showTextArea && <TextField value={sms} onChange={(e) => setSms(e.target.value)} multiline rows={4} placeholder="Habar matni..." />}
                        </form>
                    </div>

                    <div className='img relative'>
                        <div className='w-[200px] h-[90px] absolute mt-[300px] ml-[150px] bg-[#E9E9EB] p-1 rounded-xl text-sm'>
                            <h1 className='w-[200px] absolute max-w-[200px]'>{sms}</h1>
                        </div>
                        <img src={iphone} alt="iphone" style={{ maxWidth: '100%' }} />
                    </div>

                </div>



            </div>
            <div>

            </div>

        </div >
    )
}

export default Main