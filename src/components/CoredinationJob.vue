<template>
  <div class="coredination">
    <div class="__navbar__">
      <div class="navholder">
        <div class="logo">
          <img src="https://coredination.zendesk.com/hc/theming_assets/01HZPBVPJQM6AARZ5SPR6QGEB0" alt="">
        </div>
        <div class="navlinks">
          <div class="div1">
            <div class="navlinks1">
              <a href="">Log in</a>
            </div>
            <div class="navlinks2">
              <a href="">Support</a>
            </div>
            <div class="navlinks3">
              <a href="">BOOK DEMO</a>
            </div>
          </div>
          <div class="div2">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="KkfJ3B6huaLjx5F0HGbSyc49EQYDAV">
      <div class="hqkH0NbpLa5yVOZe8MXju2i">
        <div class="UEAvGn6LIHmifpBkXKtYbz">
          <div>
            <h1>Come Join Us!</h1>
            <p>At Coredination, we focus on empowering developers to innovate and enhance our transportation and machine rental management app. Join us to advance your career and streamline business operations with cutting-edge technology.</p>
          </div>
          <div>
            <a href="#cTk9dmbwMZyY6X4I30aUsLvxoBEp2333">Start Applying</a>
          </div>
        </div>
        <div class="dgu71lTVNiW50jkOhfvAYPQGRIZcr6">
          <img src="https://www.coredination.com/wp-content/uploads/2021/03/start-hero-1080x1117-png.webp" width="60%" alt="">
        </div>
      </div>
    </div>

    <div class="SVILykfRQtBr4zdNjulvaWAoEp08">
      <div class="SVILykfRQtBr4zdNjulvaWAoEp081"></div>
      <div class="SVILykfRQtBr4zdNjulvaWAoEp082"></div>
      <div class="SVILykfRQtBr4zdNjulvaWAoEp083"></div>
      <div class="SVILykfRQtBr4zdNjulvaWAoEp084"></div>
    </div>

    <div class="cTk9dmbwMZyY6X4I30aUsLvxoBEp2" id="cTk9dmbwMZyY6X4I30aUsLvxoBEp2333">
      <div class="vNdx7M3b2RCFwXluKY9WEgeZ">
        <!-- Job listings -->
        <div class="jobindex" v-for="(job, index) in jobData" :key="index">
          <div>
            <div class="main_imgcover">
              <img :src="job.job_image.img" :width="job.job_image.width" alt="">
            </div>
          </div>
          <div>
            <div class="jobtitle">
              <div>
                <h1>{{ job.jobtitle.h1 }}</h1>
              </div>
              <div class="__logo__3432">
                <img :src="job.logo.img" :width="job.logo.width" alt="">
              </div>
            </div>
            <div class="job_description">
              <p>{{ job.job_description.p }}</p>
            </div>
            <div class="applythisjob">
              <div href="#" @click.prevent="openPopup(job)">
                <a >Apply Job</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Full-page pop-up -->
    <div class="popup-overlay" v-if="showPopup">
      <div class="popup-content">
        <div class="popup-navbar">
          <!-- Your navbar content here -->
        </div>
        <div class="popup-job-details">
          <h1>{{ selectedJob.jobtitle.h1 }}</h1>
          <img :src="selectedJob.job_image.img" :width="selectedJob.job_image.width" alt="">
          <p>{{ selectedJob.job_description.p }}</p>
        </div>
        <div class="popup-form">
          <input type="text" placeholder="Name">
          <input type="email" placeholder="Email">
          <input type="file" placeholder="Resume" class="file">
          <textarea placeholder="Cover Letter"></textarea>
          <!-- Other inputs -->
          <button @click="sendapplication">Send Application</button>
        </div>
      </div>
      <button class="close-btn" @click="closePopup">
        <svg width="20px" height="20px" viewBox="0 0 1024 1024" fill="white" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M176.662 817.173c-8.19 8.471-7.96 21.977 0.51 30.165 8.472 8.19 21.978 7.96 30.166-0.51l618.667-640c8.189-8.472 7.96-21.978-0.511-30.166-8.471-8.19-21.977-7.96-30.166 0.51l-618.666 640z" fill=""></path><path d="M795.328 846.827c8.19 8.471 21.695 8.7 30.166 0.511 8.471-8.188 8.7-21.694 0.511-30.165l-618.667-640c-8.188-8.471-21.694-8.7-30.165-0.511-8.471 8.188-8.7 21.694-0.511 30.165l618.666 640z" fill=""></path></g></svg>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'CoredinationJob',
  data() {
    return {
      jobData: [],
      showPopup: false,
      selectedJob: null,
      applicantName: '',
      applicantEmail: '',
      coverLetter: '',
      uploadedFile: null,
    };
  },
  mounted() {
    axios.get('https://corediantion-41cd1258aadd.herokuapp.com/coredination/job-detail/')
      .then(response => {
        this.jobData = response.data;
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
      });
  },
  methods: {
    sendapplication() {
      alert("The Server is being developed")
    },
    openPopup(job) {
      this.selectedJob = job;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
      this.selectedJob = null;
    },
    handleFileUpload(event) {
      this.uploadedFile = event.target.files[0];
    },
    submitApplication() {
      // Handle the form submission logic here
      // For example, you can use axios to send the application data to your server
      console.log('Name:', this.applicantName);
      console.log('Email:', this.applicantEmail);
      console.log('Cover Letter:', this.coverLetter);
      console.log('Uploaded File:', this.uploadedFile);
      // Reset form fields and close the popup
      this.closePopup();
    }
  }
};
</script>

<style scoped>
.__navbar__{
  background-color: rgb(13, 29, 38, 255);
  width: 100%;
  display: flex;
  height: auto;
  position: fixed;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 2px 2px 20px 2px rgba(0, 25, 19, 0.205);
}

.navholder{
  display: flex;
  width: 95%;
  justify-content: space-between;
  padding: 10px 0
}
@media (max-width: 700px) {
  .navholder {
    width: 93%;
  }
}

.logo{
  margin-top: 10px;
}

.navlinks{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}


.navlinks1 a,
.navlinks2 a{
  color: black;
  text-decoration: none;
  color: white;
  font-size: 18px;
}

.navlinks3 a{
  background-color: rgb(255, 132, 0);
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: 13px 20px;
  border-radius: 20px;
}

.div1 {
  margin-right: 100px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 700px) {
  .div1 {
    display: none;
  }
}

.div1 div{
  margin-left: 40px
}

.div2 {
  margin-top: -5px
}

.div2 div{
  width: 30px;
  height: 3px;
  background-color: rgb(255, 255, 255);
  margin-top: 4px;
  border-radius: 20px;
}


.KkfJ3B6huaLjx5F0HGbSyc49EQYDAV{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  height: 100svh;
  color: white;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}

.UEAvGn6LIHmifpBkXKtYbz{
  text-align: left;
}


.UEAvGn6LIHmifpBkXKtYbz div{
  margin-top: 30px;
}

.UEAvGn6LIHmifpBkXKtYbz div a{
  color: white;
  background-color: rgb(255, 106, 0);
  padding: 13px 20px;
  border-radius: 40px;
  text-decoration: none;
  margin-top: 320px;
}


.logo img{
  width: 40px;
}


@media (max-width: 700px) {
  .logo img {
    width: 30px;
  }
}

@media (max-width: 900px) {
  .dgu71lTVNiW50jkOhfvAYPQGRIZcr6 img {
    display: none;
  }
}

.hqkH0NbpLa5yVOZe8MXju2i{
  margin-top: 170px;
  padding: 0 30px;
  display: flex;
  justify-content: space-around;
}


.SVILykfRQtBr4zdNjulvaWAoEp081{
  width: 100%;
  height: 3px;
  background-color: white;
  margin-top: 10px;
}

.SVILykfRQtBr4zdNjulvaWAoEp082{
  width: 100%;
  height: 5px;
  margin-top: 10px;
  background-color: white;
}

.SVILykfRQtBr4zdNjulvaWAoEp083{
  width: 100%;
  height: 7px;
  margin-top: 10px;
  background-color: white;
}

.SVILykfRQtBr4zdNjulvaWAoEp084{
  width: 100%;
  height: 9px;
  margin-top: 10px;
  background-color: white;
}


.jobtitle{
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
}

.__logo__3432 img{
  margin-top: 30px;
}

.cTk9dmbwMZyY6X4I30aUsLvxoBEp2{
  padding: 50px 30px;
  color: white;
}

@media (max-width: 700px) {
  .cTk9dmbwMZyY6X4I30aUsLvxoBEp2 {
    padding: 50px 5px;
  }
}

.vNdx7M3b2RCFwXluKY9WEgeZ{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.jobindex{
  background-color: rgb(13, 29, 38, 255);
  width: 28%;
  box-shadow: 2px 2px 20px 2px rgba(0, 20, 58, 0.153);
  height: fit-content;
  padding: 3px 3px 40px 3px;
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(84, 68, 0, 0.334);
  color: white;
  margin: 20px
}

@media (max-width: 1000px) {
  .jobindex {
    width: 40%
  }
}


@media (max-width: 700px) {
  .jobindex {
    width: 90%
  }
}

@media (max-width: 500px) {
  .jobindex {
    width: 100%
  }
}

.jobtitle h1{
text-align: left;
}

.main_imgcover img{
  border-radius: 20px;
}

.job_discription{
  text-align: left;
  padding: 0 10px;
}

.applythisjob {
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  text-align: center;
}

.applythisjob div{
  width: 98%;
  background-color: orange;
  padding: 10px 0px;
  border-radius: 5px;
  cursor: pointer;
}

.applythisjob a{
  color: white;
  text-decoration: none;
  font-size: 17px;
}

/* Pop-up styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.241);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.popup-content {
  background-color: rgb(13, 29, 38, 255);
  color: rgb(255, 255, 255);
  width: 80%;
  max-width: 800px;
  padding: 5px;
  border-radius: 10px;
  position: relative;
  max-height: 80vh;  /* Set maximum height */
  overflow-y: scroll;  /* Enable vertical scrolling */
}

/* Hide scrollbar for WebKit browsers */
.popup-content::-webkit-scrollbar {
  width: 0;
  height: 0;
}

/* Hide scrollbar for Firefox */
.popup-content {
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

.popup-navbar {
  background-color: rgb(13, 29, 38, 255);
  width: 100%;
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  color: white;
}

.popup-job-details {
  text-align: center;
  justify-content: center;
}

.popup-job-details h1,
.popup-job-details p,
.popup-job-details img {
  margin: 10px 0;
  border-radius: 10px;
}

.popup-form {
  margin-top: 20px;
  text-align: left;
  width: 97%;
}

.popup-form input,
.popup-form textarea {
  width: 95%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 100%;
  min-width: 100%;
  color: black;
  font-size: 17px;
}

.file{
  color: white
}
.popup-form textarea {
  min-height: 40px;
  max-height: 140px;
}

.popup-form button {
  background-color: orange;
  color: white;
  padding: 10px;
  border: none;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.close-btn {
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px 8px 1px ;
  border-radius: 100px;;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1001; /* Ensure it is above the pop-up content */
}
</style>
