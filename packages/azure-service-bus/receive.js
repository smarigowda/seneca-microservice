const { ServiceBusClient, ReceiveMode } = require("@azure/service-bus");
const config = require("config");
const { connectionString, queueName } = config;

async function main() {
  const sbClient = ServiceBusClient.createFromConnectionString(
    connectionString
  );
  const queueClient = sbClient.createQueueClient(queueName);
  const receiver = queueClient.createReceiver(ReceiveMode.receiveAndDelete);

  //   try {
  //     const messages = await receiver.receiveMessages(3);
  //     console.log(messages.map(message => message.body));
  //     await queueClient.close();
  //   } finally {
  //     await sbClient.close();
  //   }

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
