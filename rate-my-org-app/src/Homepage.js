import React from 'react';
import './Homepage.css';
import './index.css';
function Homepage() {
    return (
    <div>
        <head>
            <title>Your HTML Page</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&display=swap"></link>
        </head>
        <body>
            <div class= "centered-container">
                <h1>Enter your university to begin</h1>
                <input type="text" class="form-control" id="search-input" placeholder="Search..." />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Options</button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Option 1</a>
                        <a class="dropdown-item" href="#">Option 2</a>
                        <a class="dropdown-item" href="#">Option 3</a>
                    </div>
                    <button class="btn btn-primary" type="button">Search</button>
                </div>
            </div>
        </body>
    </div>
    );
};

export default Homepage;
