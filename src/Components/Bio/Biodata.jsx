import React, { useState } from 'react';
import './Biodata.css';
import EDII_logo from '../Assets/EDII_logo.png';

const Biodata = () => {
    const [form, setForm] = useState({
        position: '',
        name: '',
        id_number: '',
        birthday: '',
        birthplace: '',
        gender: '',
        religion: '',
        bloodtype: '',
        marital_status: '',
        id_address: '',
        domicile: '',
        email: '',
        phone_number: '',
        relative_name: '',
        relative_phone: '',
        skills: [],
        relocate_consent: '',
        expected_salary: ''
    });

    const [skill, setSkill] = useState('');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleAddSkill = () => {
        if (skill && !form.skills.includes(skill)) {
            setForm({
                ...form,
                skills: [...form.skills, skill]
            });
            setSkill('');
        }
    };

    const handleRemoveSkill = (removedSkill) => {
        setForm({
            ...form,
            skills: form.skills.filter(skill => skill !== removedSkill)
        });
    };

    const handleSubmit = () => {
        // Implement your submit logic here
        console.log(form);
    };

    return (
        <div className="container">
            <div className="header">
                <img src={EDII_logo} alt="icon" style={{width: '300px', height: '200px'}} />
                <h1 className="text">DATA PRIBADI PELAMAR</h1>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input-container">
                    <label>Posisi yang Dilamar</label>
                    <input
                        type="text"
                        name="position"
                        value={form.position}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-container">
                    <label>Nama</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-container">
                    <label>NO. KTP</label>
                    <input
                        type="text"
                        name="id_number"
                        value={form.id_number}
                        onChange={handleChange}
                    />
                </div>

                <div className="side-by-side">
                    <div className="input-container">
                        <label>Tempat Lahir</label>
                        <input
                            type="text"
                            name="birthplace"
                            value={form.birthplace}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-container">
                        <label>Tanggal Lahir</label>
                        <input
                            type="date"
                            name="birthday"
                            value={form.birthday}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="input-container">
                    <label>Jenis Kelamin</label>
                    <select name="gender" value={form.gender} onChange={handleChange}>
                        <option value="">Pilih</option>
                        <option value="LAKI-LAKI">LAKI-LAKI</option>
                        <option value="PEREMPUAN">PEREMPUAN</option>
                    </select>
                </div>

                <div className="input-container">
                    <label>AGAMA</label>
                    <input
                        type="text"
                        name="religion"
                        value={form.religion}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-container">
                    <label>GOLONGAN DARAH</label>
                    <select name="bloodtype" value={form.bloodtype} onChange={handleChange}>
                        <option value="">Pilih</option>
                        <option value="O">O</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                    </select>
                </div>

                <div className="input-container">
                    <label>STATUS</label>
                    <select name="marital_status" value={form.marital_status} onChange={handleChange}>
                        <option value="">Pilih</option>
                        <option value="SINGLE">SINGLE</option>
                        <option value="MENIKAH">MENIKAH</option>
                        <option value="DUDA">DUDA</option>
                        <option value="JANDA">JANDA</option>
                    </select>
                </div>

                <div className="input-container">
                    <label>ALAMAT KTP</label>
                    <input
                        type="text"
                        name="id_address"
                        value={form.id_address}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-container">
                    <label>ALAMAT TINGGAL</label>
                    <input
                        type="text"
                        name="domicile"
                        value={form.domicile}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-container">
                    <label>EMAIL</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-container">
                    <label>NO. TELP</label>
                    <input
                        type="text"
                        name="phone_number"
                        value={form.phone_number}
                        onChange={handleChange}
                    />
                </div>

                <div className="side-by-side">
                    <div className="input-container">
                        <label>ORANG TERDEKAT YANG DAPAT DIHUBUNGI</label>
                        <input
                            type="text"
                            name="relative_name"
                            value={form.relative_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-container">
                        <label>NO. TELP ORANG TERDEKAT</label>
                        <input
                            type="text"
                            name="relative_phone"
                            value={form.relative_phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="skill-container">
                    <label>Skill</label>
                    <div className="skill-input">
                        <input
                            type="text"
                            value={skill}
                            onChange={(e) => setSkill(e.target.value)}
                        />
                        <button type="button" onClick={handleAddSkill}>Add Skill</button>
                    </div>
                    <div className="skills">
                        {form.skills.map((skill, index) => (
                            <div key={index} className="skill-chip">
                                {skill}
                                <span
                                    className="delete-chip"
                                    onClick={() => handleRemoveSkill(skill)}
                                >
                                    &times;
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="input-container">
                    <label>BERSEDIA DITEMPATKAN DI SELURUH KANTOR PERUSAHAAN</label>
                    <select name="relocate_consent" value={form.relocate_consent} onChange={handleChange}>
                        <option value="">Pilih</option>
                        <option value="Ya">Ya</option>
                        <option value="Tidak">Tidak</option>
                    </select>
                </div>

                <div className="input-container">
                    <label>PENGHASILAN YANG DIHARAPKAN</label>
                    <input
                        type="number"
                        name="expected_salary"
                        value={form.expected_salary}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="submit-container">
                <button className="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Biodata;
