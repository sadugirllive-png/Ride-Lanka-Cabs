// Step එකෙන් ස්ටෙප් එකට මාරු වීමේ ශ්‍රිතය (Wizard Control)
function goToStep(stepNumber) {
    document.querySelectorAll('.wizard-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById('step' + stepNumber).classList.add('active');
}

// 2 වෙනි පියවරේ තෝරන වර්ගය අනුව 3 වෙනි පියවරේ වාහන වෙනස් කිරීම (Dynamic Filter)
function filterVehicles() {
    const type = document.getElementById('vehicleType').value;
    const modelSelect = document.getElementById('vehicleModel');
    
    modelSelect.innerHTML = '<option value="">-- Select Specific Vehicle --</option>';
    
    let vehicles = [];
    
    if (type === "Car") {
        vehicles = ["Mini Car (Wagon R)", "Micro (Alto)", "Sedan (Prius)", "Sedan (Axio)", "Sedan (Premio)", "SUV"];
    } else if (type === "Van") {
        vehicles = ["Mini Van (Hijet)", "Mini Van (Every)", "KDH Flat Roof", "KDH High Roof", "Caravan"];
    } else if (type === "Bus") {
        vehicles = ["Rosa Bus", "Coaster Bus", "Ashok Leyland", "Non AC Bus", "Super Luxury Bus"];
    }
    
    vehicles.forEach(v => {
        let opt = document.createElement('option');
        opt.value = v;
        opt.innerText = v;
        modelSelect.appendChild(opt);
    });
}

// අන්තිම පියවරේදී Form එක Submit කළ විට WhatsApp එකට දත්ත යැවීම
document.getElementById('masterBookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const pickup = document.getElementById('pickup').value;
    const drop = document.getElementById('drop').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const passengers = document.getElementById('passengers').value;
    const tripType = document.getElementById('tripType').value;
    const vehicleType = document.getElementById('vehicleType').value;
    const vehicleModel = document.getElementById('vehicleModel').value;
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const whatsapp = document.getElementById('custWhatsApp').value;
    const note = document.getElementById('specialNote').value || "None";

    // ඔයා ඉල්ලපු නියමිත Message Format එක
    const message = `*Ride Lanka Cabs Booking*\n\n` +
                    `Pickup : ${pickup}\n` +
                    `Drop : ${drop}\n` +
                    `Date : ${date}\n` +
                    `Time : ${time}\n` +
                    `Passengers : ${passengers}\n` +
                    `Trip Type : ${tripType}\n` +
                    `Vehicle Type : ${vehicleType}\n` +
                    `Vehicle : ${vehicleModel}\n\n` +
                    `Customer Name : ${name}\n` +
                    `Phone : ${phone}\n` +
                    `WhatsApp : ${whatsapp}\n` +
                    `Special Note : ${note}`;

    const waUrl = `https://wa.me/94767137478?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
});