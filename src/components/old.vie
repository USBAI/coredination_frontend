import requests

# Define the API URL and API key
api_url = "https://corediantion-41cd1258aadd.herokuapp.com/coredination/get-job-data/"
api_key = "d561d1ea-d51f-4b3e-a48a-b5cbf683a732"

# Define headers
headers = {
    "Authorization": f"Bearer {api_key}"
}

# Function to make the GET request
def fetch_data(url, headers):
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()
    else:
        return response.status_code

# Fetch data using Bearer Token
data = fetch_data(api_url, headers)

if isinstance(data, dict):
    print("Data retrieved successfully:")
    print(data)
else:
    print(f"Failed to retrieve data. Status code: {data}")
