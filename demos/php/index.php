<!doctype html>
<html>
  <head>
    <title>PHP DonorDrive API Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/css/uikit.min.css" />
  </head>
  <body>
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="http://www.donordrive.com">DonoDrive</a>
        <ul class="uk-navbar-nav">
          <li>
            <a href="#"><span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>Features</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="uk-container">
      <h1>Event Participants</h1>
      <div class="uk-grid-match uk-text-center" uk-grid>
        <?php
          // Basic cURL request to get all participants from event 526
          $curl = curl_init();
          $timeout = 10;
          curl_setopt_array($curl, array(
              CURLOPT_RETURNTRANSFER => 1,
              // CURLOPT_HEADER => 1,
              CURLOPT_URL => 'https://{ DONORDRIVE URL HERE }/api/events/{ EVENT ID }/participants/?limit=9&offset=1',
              CURLOPT_CONNECTTIMEOUT => $timeout
          ));

          $response = curl_exec($curl);
          $jsonResponse = json_decode($response, true);
          curl_close($curl);

          if($jsonResponse) {
            foreach($jsonResponse as $participant) {
              echo '<div class="uk-width-1-3@m">
                      <div>
                        <div class="uk-card uk-card-default uk-card-body uk-margin">
                            <h3 class="uk-card-title">' . $participant['displayName'] . '</h3>
                            <p>' . $participant['createdDateUTC'] . '</p>
                            <p>' . $participant['eventName'] . '</p>
                        </div>
                      </div>
                    </div>';
            }
          } else {
            echo '<p>No participants for this event found</p>';
          }

        ?>
      </div>
    </div>

    <ul class="uk-pagination uk-flex-center" uk-margin>
      <li><a href="#"><span uk-pagination-previous></span></a></li>
      <li><a href="#">1</a></li>
      <li class="uk-disabled"><span>...</span></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li class="uk-active"><span>7</span></li>
      <li><a href="#">8</a></li>
      <li><a href="#"><span uk-pagination-next></span></a></li>
    </ul>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js"></script>
  </body>
</html>
