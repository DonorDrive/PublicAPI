using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

public class Program
{
    private const string URL = "https://try.donordrive.com/api/";
    private static string urlParameters = "participants?orderBy=sumDonations%20DESC&limit=10";

    static void Main(string[] args)    
        => new Program().MainAsync().GetAwaiter().GetResult();

    private async Task MainAsync()
    {
        using (var client = new HttpClient())
        {
            client.BaseAddress = new Uri(URL);
            HttpResponseMessage response = await client.GetAsync(urlParameters);
            if (response.IsSuccessStatusCode)
            {
                dynamic participants = response.Content.ReadAsAsync<IEnumerable<dynamic>>().Result;
                foreach (dynamic participant in participants)
                {
                    Console.WriteLine("{0}", participant);
                }
            }
            else
            {
                Console.WriteLine("{0} ({1})", (int)response.StatusCode, response.ReasonPhrase);
            }  
        }
    }
}
