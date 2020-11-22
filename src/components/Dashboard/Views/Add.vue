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
         
              <input placeholder="Enter sunject" class="form-control">
            </div>
            <button type="submit" class="btn btn-fill btn-info">Submit</button>
          </div>
        </form>
      </div> <!-- end card -->
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
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
    }
  }
</script>
<style>
</style>
