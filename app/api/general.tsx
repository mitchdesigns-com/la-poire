import axios from "axios";


const sendRequest = async (endpoint: any, requestData: any, method = "GET") => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/${endpoint}`;
    const requestBody = {
      ...requestData,
    };

    const response = await fetch(apiUrl, {
      method: method,
      body: method === "POST" ? JSON.stringify(requestBody) : null,
    });

    if (response.ok) {
      const responseData = await response.json();
      // console.log('Response status:', response.status);
      // console.log('Response OK');
      // console.log('Response>>', response.json());
      // console.log('Response status text:', response.statusText);
      // console.log('Response headers:', response.headers);
      // console.log('Response data:', responseData);    
      return responseData;
    }
    return null;
  } catch (error) {
    // console.log("An error occurred", error);
    return null;
  }
};


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


const fetchLanding = async () => {
  return sendRequest("landing-pages?populate[0]=heroImage,metadata.metaImage", {});
};

export { subscribeToCampaignMonitor,fetchLanding };
