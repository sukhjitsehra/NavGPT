import requests

def get_pollution_data(lat, lon):
    api_key = "2e8767f4724d611fad2ff41b4935f0d3b3da985e"  
    url = f"https://api.waqi.info/feed/geo:{lat};{lon}/?token={api_key}"
    
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data['status'] == 'ok':
            aqi = data['data']['aqi']
            return aqi
        else:
            print("No data available for these coordinates.")
    else:
        print(f"Failed to retrieve data for the coordinates ({lat}, {lon}). HTTP Status code: {response.status_code}")

aqi = get_pollution_data(43.4781378,-80.5328791)
print(aqi)
