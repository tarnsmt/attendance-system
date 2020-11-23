<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <form method="#" action="#">
          <div class="card-header">
            <h4 class="card-title">
              Add Course
            </h4>
          </div>
          <div class="card-content">
            <div class="form-group">
              <label>Class ID</label>
              <input type="number" placeholder="Enter class id" class="form-control" v-model='class_id'>
              <label>Subject</label>
              <input placeholder="Enter subject" class="form-control" v-model='subject'>
              <label>Course</label>
              <input placeholder="Enter course" class="form-control" v-model='course'>
              <label>Late time (in 24 hour format eg: 13:30:00)</label>
              <input placeholder="Enter Late time" class="form-control" v-model='late_time'>
            </div>
            <button class="btn btn-fill btn-info">
              <a @click='addCourse' style="color:white">Submit</a>
            </button>
          </div>
        </form>
      </div> <!-- end card -->
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import store from 'src/store/store'
  import Vuex from 'vuex'
  global.vuex = Vuex
  export default {
    data () {
      return {
        class_id: null,
        subject: null,
        course: null,
        late_time: null,
        teacher_id: store.state.userid,
        radios: {
          radio1: '1',
          radio2: '2',
          radio3: '2'
        },
        checkboxes: {
          first: false,
          second: false,
          a: false,
          b: false,
          c: false,
          unchecked: false,
          checked: true,
          disabledUnchecked: false,
          disabledChecked: true
        }
      }
    },
    store,
    methods: {
      async addCourse () {
        if (this.class_id === null || this.course === null || this.subject === null || this.late_time === null) {
          alert('Please enter all values')
        } else {
          let payload = {
            'class_id': Number(this.class_id),
            'course': this.course,
            'subject': this.subject,
            'teacher_id': this.teacher_id,
            'late_time': this.late_time
          }
          await axios.post('http://127.0.0.1:5000/user/teacher/create_class', payload).then(
            res => {
              alert(res.data['message'] + '\nRedirect you to dashboard')
              this.$router.push('/admin/overview')
            }
          )
        }
      }
    }
  }
</script>
<style>
</style>
