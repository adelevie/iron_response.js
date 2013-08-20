Work-in-progress.

# iron_response.js

A Javascript port of Ruby's `iron_response` gem.

Provides a response object to Node.js IronWorker scripts.

## Usage

`my_worker.js`:

```javascript
var iron_response = require("iron_response");

iron_response.Worker(params, task_id, function() {
  // worker code goes here
  return params["foo"];
});
```

Calling from Ruby (using the [`iron_response`](http://github.com/adelevie/iron_response) gem):

```ruby
require "iron_response"

batch = IronResponse::Batch.new(token: "123", project_id: "456")
batch.worker = "my_worker.js"
batch.params_array = [1..20].map {|i| {foo: i}}
batch.create_code!(max_concurrency: 10)

results = batch.run!
```