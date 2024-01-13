import  { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb"
import { fromIni } from "@aws-sdk/credential-provider-ini"

const client = new DynamoDBClient({
    region: "us-east-1", 
    credentials: fromIni({ profile: "entix-sandbox" })
})

const ping = async () => {
  const command = new ListTablesCommand({})
  try {
    const results = await client.send(command)
    console.log(results)
  } catch (err) {
    console.error(err)
  }
}

ping()