# THIS REPO HAS MIGRATED - find the current site in the medhacks/SplashPage2k16 repo!

-------------

# MedHacks main website

At MedHacks 2015, the student-run medical hackathon at Johns Hopkins University, today’s brightest minds are being empowered to design tomorrow’s greatest innovations. We're selecting the top young technologists, scientists, and engineers from around the country, and giving them 36 hours to confront the most universal human challenge: health. Against the backdrop of one of the world’s leaders in medical innovation - Johns Hopkins University - hackers across all disciplines will unite in Baltimore, meet with experts in every part of the medical field, and develop their solutions to complex healthcare problems. At the end of the weekend-long event, teams will have the opportunity to present their projects. Winners will be chosen by a distinguished board of judges.

## Running the webserver
Because the website uses absolute paths, you cannot access it from the `file:///` protocol. Instead, to run it you will need to run the following from the repos root directory:

```bash
$ python -m SimpleHTTPServer
Serving HTTP on 0.0.0.0 port 8000
```

Then go to http://localhost:8000/ to visit your development version of the site.
