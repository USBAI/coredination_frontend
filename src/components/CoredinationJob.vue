<template>
  <div class="coredination">
    <!-- Navbar -->
    <div class="__navbar__">
      <div class="navholder">
        <div class="logo">
          <img src="https://coredination.zendesk.com/hc/theming_assets/01HZPBVPJQM6AARZ5SPR6QGEB0" width="40px" alt="Coredination Logo">
        </div>
        <div class="navlinks">
          <div class="div1">
            <div class="navlinks3">
              <a href="#">BOOK DEMO</a>
            </div>
          </div>
          <a href="https://coredination.se">
            <div class="div2">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Job Listings -->
    <div class="vNdx7M3b2RCFwXluKY9WEgeZ">
      <div class="jobindex" v-for="(job, index) in formattedJobs" :key="index" @click.prevent="openPopup(job)">
        <div class="jobtitle">
          <h1>{{ job.title || 'null' }}</h1>
        </div>
        <div class="job_description">
          <p>{{ job.description || 'null' }}</p>
        </div>
        <div class="job_details">
          <p><strong>Start Time:</strong> {{ job.startTime || 'null' }}</p>
          <p><strong>End Time:</strong> {{ job.endTime || 'null' }}</p>
          <p><strong>Status:</strong> {{ job.state || 'null' }}</p>
          <p><strong>Location:</strong> {{ job.destinations.length > 0 ? job.destinations[0].location.placeName : 'null' }}</p>
        </div>
        <div class="applythisjob">
          <a href="#">View Details</a>
        </div>
      </div>
    </div>

    <!-- Full-page pop-up -->
    <div class="popup-overlay" v-if="showPopup">
      <div class="popup-content">
        <button class="close-btn" @click="closePopup">Close</button>
        <div class="popup-job-details">
          <h1>{{ selectedJob.title || 'null' }}</h1>
          <p><strong>Description:</strong> {{ selectedJob.description || 'null' }}</p>
          <p><strong>Start Time:</strong> {{ selectedJob.startTime || 'null' }}</p>
          <p><strong>End Time:</strong> {{ selectedJob.endTime || 'null' }}</p>
          <p><strong>Status:</strong> {{ selectedJob.state || 'null' }}</p>
          <p><strong>Duration:</strong> {{ selectedJob.duration || 'null' }} hours</p>
          <p><strong>Location:</strong> {{ selectedJob.destinations.length > 0 ? selectedJob.destinations[0].location.placeName : 'null' }}</p>
        </div>
      </div>
    </div>

    <div>
      <div class="oioujkndnfj">
        <span>Logged in Under Elias Luzwehimana Account</span>
      </div>
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
    };
  },
  computed: {
    formattedJobs() {
      return this.jobData.map(job => {
        return {
          ...job,
          startTime: job.startTime ? this.formatTimestamp(job.startTime) : 'null',
          endTime: job.endTime ? this.formatTimestamp(job.endTime) : 'null',
          duration: job.duration ? (job.duration / 60).toFixed(2) : 'null', // Convert minutes to hours
        };
      });
    }
  },
  mounted() {
    const apiKey = 'd561d1ea-d51f-4b3e-a48a-b5cbf683a732';
    const apiUrl = 'https://corediantion-41cd1258aadd.herokuapp.com/coredination/get-job-data/';

    console.log('API Key:', apiKey);
    console.log('API URL:', apiUrl);

    axios.get(apiUrl, {
      headers: {
        'STVN-API-Key': apiKey
      }
    })
    .then(response => {
      this.jobData = response.data;
      console.log('Fetched Job Data:', this.jobData);
    })
    .catch(error => {
      console.error('Error fetching job data:', error.response || error.message || error);
    });
  },

  methods: {
    openPopup(job) {
      this.selectedJob = job;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
      this.selectedJob = null;
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      };
      return date.toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
.__navbar__ {
  background-color: rgb(13, 29, 38);
  width: 100%;
  display: flex;
  height: auto;
  position: fixed;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 2px 2px 20px 2px rgba(0, 25, 19, 0.205);
  z-index: 1000;
}

.navholder {
  display: flex;
  width: 95%;
  justify-content: space-between;
  padding: 10px 0;
}

.logo {
  margin-top: 10px;
}

.navlinks {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.navlinks1 span,
.navlinks2 a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.navlinks3 a {
  background-color: rgb(255, 132, 0);
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: 13px 20px;
  border-radius: 20px;
}

/* Hide "BOOK DEMO" under 800px */
@media (max-width: 800px) {
  .navlinks3 {
    display: none;
  }
}

.div1 {
  margin-right: 100px;
  display: flex;
  justify-content: space-between;
}

.div2 {
  margin-top: -5px;
}

.div2 div {
  width: 30px;
  height: 3px;
  background-color: rgb(255, 255, 255);
  margin-top: 4px;
  border-radius: 20px;
}

.oioujkndnfj {
  text-align: center;
  font-size: 18px;
  color: white;
  margin-top: 0px;
  padding-top: 20px;
}

.vNdx7M3b2RCFwXluKY9WEgeZ {
  padding: 150px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.jobindex {
  background-color: rgb(13, 29, 38);
  width: 28%;
  box-shadow: 2px 2px 20px 2px rgba(0, 20, 58, 0.153);
  padding: 20px;
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(84, 68, 0, 0.334);
  color: white;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.jobindex:hover {
  transform: scale(1.05);
}

.jobtitle h1 {
  text-align: left;
  margin: 10px 0;
}

.job_description p {
  text-align: left;
  margin: 10px 0;
}

.job_details p {
  text-align: left;
  margin: 5px 0;
}

.applythisjob {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.applythisjob a {
  background-color: orange;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
}

/* Full-screen pop-up */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: rgb(13, 29, 38);
  color: white;
  width: 90%;
  max-width: 900px;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
}

.popup-job-details p {
  margin: 10px 0;
}

.close-btn {
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Responsive adjustments */
@media (max-width: 800px) {
  .jobindex {
    width: 95%;
  }
}
</style>
