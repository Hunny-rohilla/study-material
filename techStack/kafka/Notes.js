//? Reference Link: https://www.youtube.com/watch?v=ZJJHm_bd9Zo

//! Kafka
// ----------------------------------------------------------------

//- Apache Kafka is an open-source distributed event streaming platform used for building real-time data pipelines and streaming applications. It is designed to handle high volumes of data, provide fault tolerance, and ensure low-latency message delivery. Kafka is widely used for various use cases such as real-time analytics, log aggregation, monitoring, and messaging systems.

// Here are some important topics related to Kafka:

//* 1. **Topics**:
// Topics are the categories or feeds to which records are published. They act as channels through which data flows in Kafka.

// const { Kafka } = require('kafkajs');
const kafka = new Kafka({
  brokers: ["broker1:9092", "broker2:9092"],
});

// Create a topic called 'my-topic'
async function createTopic() {
  const admin = kafka.admin();
  await admin.connect();
  await admin.createTopics({
    topics: [{ topic: "my-topic" }],
  });
  await admin.disconnect();
}

createTopic();

//* 2. **Partitions**:
// Partitions allow parallel processing and improve throughput. Each partition is an ordered, immutable sequence of records.

// const { Kafka } = require('kafkajs');
const kafka1 = new Kafka({
  brokers: ["broker1:9092", "broker2:9092"],
});

// Create a topic 'my-topic' with 3 partitions
async function createPartitionedTopic() {
  const admin = kafka.admin();
  await admin.connect();
  await admin.createTopics({
    topics: [
      {
        topic: "my-topic",
        numPartitions: 3,
      },
    ],
  });
  await admin.disconnect();
}

createPartitionedTopic();

//* 3. **Brokers**:
// Brokers are servers that store data, handle data replication, partitioning, and distribution across nodes.

// const { Kafka2 } = require('kafkajs');

const kafka2 = new Kafka({
  brokers: ["broker1:9092", "broker2:9092"],
});

// Get metadata about brokers in the cluster
async function getBrokerMetadata() {
  const admin = kafka.admin();
  await admin.connect();
  const metadata = await admin.fetchTopicMetadata({ topics: ["my-topic"] });
  console.log(metadata.brokers);
  await admin.disconnect();
}

getBrokerMetadata();

//* 4. **Producers**:
// Producers publish messages to Kafka topics.

// const { Kafka3 } = require('kafkajs');

const kafka3 = new Kafka({
  brokers: ["broker1:9092", "broker2:9092"],
});

const producer = kafka.producer();

// Send a message to topic 'my-topic'
async function produceMessage(topic, message) {
  await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: message }],
  });
  await producer.disconnect();
}

produceMessage("my-topic", "Hello Kafka!");

//* 5. **Consumers**:
// Consumers subscribe to Kafka topics and consume messages.

// const { Kafka4 } = require('kafkajs');

const kafka4 = new Kafka({
  brokers: ["broker1:9092", "broker2:9092"],
});

// const consumer = kafka.consumer({ groupId: 'my-group' });

// Consume messages from topic 'my-topic'
async function consumeMessages(topic) {
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
}

consumeMessages("my-topic");

//* 6. **Consumer Groups**:
// Consumer groups enable multiple consumers to work together to consume messages from a topic.

// const { Kafka5 } = require('kafkajs');

const kafka5 = new Kafka({
  brokers: ["broker1:9092", "broker2:9092"],
});

const consumer1 = kafka.consumer({ groupId: "group1" });
const consumer2 = kafka.consumer({ groupId: "group1" });

// Consume messages from topic 'my-topic' using consumer groups
async function consumeWithConsumerGroups(topic, consumer) {
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
}

consumeWithConsumerGroups("my-topic", consumer1);
consumeWithConsumerGroups("my-topic", consumer2);

//* 7. **Offsets**:
// Offsets are unique identifiers for messages within a partition.

// const { Kafka6 } = require('kafkajs');

const kafka6 = new Kafka({
  brokers: ["broker1:9092", "broker2:9092"],
});

const consumer = kafka.consumer({ groupId: "my-group" });

// Get the current offset for a consumer group
async function getCurrentOffset(topic, partition) {
  await consumer.connect();
  await consumer.subscribe({ topic });
  const offsets = await consumer.fetchOffsets([{ topic, partition }]);
  console.log(offsets);
}

getCurrentOffset("my-topic", 0);

// Advantages of Kafka:
// - **Scalability**: Kafka scales horizontally by adding more brokers and partitions, handling large volumes of data and high throughput.
// - **Fault Tolerance**: Kafka replicates data across brokers, ensuring fault tolerance and data durability.
// - **High Throughput and Low Latency**: Kafka is optimized for high throughput and low-latency message delivery, making it suitable for real-time applications.
// - **Message Retention**: Kafka allows configurable message retention periods, enabling replay and data recovery.
// - **Ecosystem Integration**: Kafka integrates well with other data processing frameworks and systems like Apache Spark, Apache Flink, and Elasticsearch.

// Disadvantages of Kafka:
// - **Complexity**: Setting up and managing Kafka clusters can be complex, requiring expertise in distributed systems and configuration management.
// - **Operational Overhead**: Kafka clusters require monitoring, maintenance, and configuration tuning, adding to operational overhead.
// - **Learning Curve**: Developers new to Kafka may face a learning curve due to its distributed nature, configuration options, and APIs.

// Overall, Kafka is a powerful and versatile streaming platform used for building real-time data pipelines and applications, offering scalability, fault tolerance, high throughput, and integration capabilities. However, it requires careful planning, management, and understanding of its concepts to fully leverage its capabilities.