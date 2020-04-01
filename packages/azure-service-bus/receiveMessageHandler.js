const { ServiceBusClient, ReceiveMode } = require("@azure/service-bus");
const config = require("config");
const { connectionString, queueName } = config;

async function main() {
  const sbClient = ServiceBusClient.createFromConnectionString(
    connectionString
  );
  const queueClient = sbClient.createQueueClient(queueName);
  const receiver = queueClient.createReceiver(ReceiveMode.receiveAndDelete);

  receiver.registerMessageHandler(
    message => {
      console.log(message.body);
    },
    error => console.log("error while receiving message", error)
  );
}

main().catch(error => {
  console.log("Error occurred:", error);
});
