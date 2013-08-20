function Worker(params, task_id, block) {
  this.params = params;
  this.task_id = task_id;
  this.block = block;
  var data = this.block();
  console.log("Task id is " + this.task_id + ".");
  console.log("Pretending to send " + data + " to S3.");
}