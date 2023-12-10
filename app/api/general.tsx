import axios from "axios";

const subscribeToCampaignMonitor = async (
  fullName: string,
  emailAddress: string
) => {
  const apiKey = "/7FMovh24Jwbi4Vaf1OaBeL9SFKjKYjTIqX+XYnvaHilYAfhnrGK9UA1vpqDOXF1B6MTHZRpPap5zvNdCrhFZueHWGDrHTP6x5L0Q1SKNRNjB1/UokGJA9BltsZl0qYNWWCunQ8sTqrj3jwz7oZjmw==";
  const audienceID = "04489840ee5c032e259d946a516628a2";

  const endpoint = `https://api.createsend.com/api/v3.2/subscribers/${audienceID}.json`;

  const data = {
    EmailAddress: emailAddress,
    Name: fullName,
    ConsentToTrack: "Yes", // Assuming you have consent from subscribers
  };

  try {
    const response = await axios.post(endpoint, data, {
      auth: {
        username: apiKey,
        password: "x", // The value of 'x' is used as the password for API key authentication
      },
    });

    if (response.status === 201) {
      console.log("Subscriber added successfully.");
    } else {
      console.error("Failed to add subscriber.");
    }
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};

export { subscribeToCampaignMonitor };
