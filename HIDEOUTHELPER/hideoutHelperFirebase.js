// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, doc, setDoc} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional\
const firebaseConfig = {
    apiKey: "AIzaSyDL7AlOqEol3u1LHmn7RS4i7fduyy2lmGI",
    authDomain: "hideouthelper-7c1a6.firebaseapp.com",
    projectId: "hideouthelper-7c1a6",
    storageBucket: "hideouthelper-7c1a6.appspot.com",
    messagingSenderId: "1011025758280",
    appId: "1:1011025758280:web:4ecc9b03da3dc2f81b707d",
    measurementId: "G-LV7BW8NQLQ"
  }; 

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const file_air_filtering_unit = doc(db, 'Collection/AirFilteringUnit');
const file_bitcoin_farm1 = doc(db,'Collection/BitcoinFarm1');
const file_bitcoin_farm2 = doc(db,'Collection/BitcoinFarm2');
const file_bitcoin_farm3 = doc(db,'Collection/BitcoinFarm3');
const file_booze_generator = doc(db,'Collection/BoozeGenerator');
const file_heating1 = doc(db,'Collection/Heating1');
const file_heating2 = doc(db,'Collection/Heating2');
const file_heating3 = doc(db,'Collection/Heating3');

async function write_Heating1(){
    const Heating1 = {
        roubles: '25000',
        classic_matches: '2'
    };
    try {
        // Write the data to Firestore
        await setDoc(file_heating1, Heating1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Heating2(){
    const Heating2 = {
        dry_fuel: '3',
        roubles: '50000',
        hunting_matches: '2',
        crickent_lighter: '3'
    };
    try {
        // Write the data to Firestore
        await setDoc(file_heating2, Heating2);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Heating3(){
    const Heating3 = {
        radiator_helix: '8',
        bundle_of_wires: '8',
        phase_control_relay: '4',
        military_corrugated_hose: '2'
    };
    try {
        // Write the data to Firestore
        await setDoc(file_heating3, Heating3);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_AirFilteringUnit() {
    const Air_filtering_unit1 = {
        gas_mask_air_filter: '5',
        dollars: '25000',
        military_power_filter: '5',
        military_corrugated_hose: '3',
    };
    
    try {
        // Write the data to Firestore
        await setDoc(file_air_filtering_unit , Air_filtering_unit1);
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_BitcoinFarm1(){
    const Bitcoin_Farm1 = {
        tshaped_plug: '5',
        vpx_flash_storage_module: '1',
        power_cord: '10',
        power_supply_unit: '10',
        cpu_fan: '15'
    };
    
    try {
        // Write the data to Firestore
        await setDoc(file_bitcoin_farm1, Bitcoin_Farm1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_BitcoinFarm2(){
    const Bitcoin_Farm2 = {
        cpu_fan: '15',
        power_supply_unit: '10',
        printed_circuit_board: '15',
        phase_control_relay: '5',
        military_power_filter: '2'
    };
    
    try {
        // Write the data to Firestore
        await setDoc(file_bitcoin_farm2, Bitcoin_Farm2);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_BitcoinFarm3(){
    const Bitcoin_Farm3 = {
        cpu_fan: '25',
        silicon_tube: '15',
        electric_motor: '10',
        pressure_gauge: '10',
        six_sten_140_m_military_battery: '1'
    };
    
    try {
        // Write the data to Firestore
        await setDoc(file_bitcoin_farm3, Bitcoin_Farm3);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_BoozeGenerator(){
    const Booze_Generator = {
        metal_spare_part: '2',
        pressure_gauge: '2',
        radiator_helix: '3',
        silicon_tube: '4',
        pipe_grip_wrench: '1',
        analog_thermometer: '2',
        corrugated_hose: '5'
    };
    
    try {
        // Write the data to Firestore
        await setDoc(file_booze_generator, Booze_Generator);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_DefectiveWall(){
    
    try{
        await Promise.all([
            db.collection('DefectiveWall1').add({
                fleece: '1'
            }),
            db.collection('DefectiveWall2').add({
                fleece: '1'
            }),
            db.collection('DefectiveWall3').add({
                fleece: '1'
            }),
            db.collection('DefectiveWall4').add({
                fierce_blow_sledgehammer: '1',
                fleece: '1'
            }),
            db.collection('DefectiveWall5').add({
                metal_cutting_scissors: '1',
                toolset: '1',
                fleece: '1'
            }),
            db.collection('DefectiveWall6').add({
                corrugated_hose: '2',
                duct_tape: '1',
                toolset: '1',
                pliers_elite: '1',
                metal_spare_part: '5',
                xenomorph_sealing_foam: '1',
                bundle_of_wires: '2',
                light_bulb: '2'
            })
        ]);
        console.log("Document successfully written!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
write_AirFilteringUnit();
write_BitcoinFarm1();
write_BitcoinFarm2();
write_BitcoinFarm3();
write_BoozeGenerator();
write_DefectiveWall();
write_Heating1();
write_Heating2();
write_Heating3();