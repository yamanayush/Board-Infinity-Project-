function generateIDCard() {
    var studentName = document.getElementById("name").value;
    var studentCollege = document.getElementById("college").value;
    var studentLocation = document.getElementById("location").value;
    var studentPhoto = document.getElementById("photo").files[0];

    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("studentPhotoDisplay").src = e.target.result;
    }
    reader.readAsDataURL(studentPhoto);

    document.getElementById("studentNameDisplay").textContent = "Name: "+studentName;
    document.getElementById("studentCollegeDisplay").textContent = "College Name: "+studentCollege;
    document.getElementById("studentLocationDisplay").textContent = "Location: "+studentLocation;

    document.getElementById("idCardContainer").style.display = "block";
}