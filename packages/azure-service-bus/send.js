const { ServiceBusClient } = require("@azure/service-bus");
const config = require("config");
const { connectionString, queueName } = config;

const delay = ({ timeoutMs }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeoutMs);
  });
};

async function main() {
  const sbClient = ServiceBusClient.createFromConnectionString(
    connectionString
  );
  const queueClient = sbClient.createQueueClient(queueName);
  const sender = queueClient.createSender();
  try {
    for (let i = 0; i < 10; i++) {
      const message = {
        body: `Hello world! ${i}`,
        label: "test",
        userProperties: {
          myCustomPropertyName: `my custom property value ${i}`
        }
      };
      console.log(message);
      await sender.send(message);
      const timeoutMs = 1000;
      console.log(`waiting for ${timeoutMs} mili sec...`);
      await delay({ timeoutMs });
    }
    await queueClient.close();
  } finally {
    await sbClient.close();
  }
}

main().catch(error => {
  console.log("Error occurred: ", error);
});
