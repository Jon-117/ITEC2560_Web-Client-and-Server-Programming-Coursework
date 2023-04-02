import os
PATH = os.environ.get('LOCALPATH')
HEADER = "Jon Koch - ITEC 2560"


def generate_html_index(folder_path, base_url):
    # Get the parent folder path
    parent_path = os.path.abspath(os.path.join(folder_path, os.pardir))
    # Get the parent folder name
    parent_name = os.path.basename(parent_path)

    # List all the files and folders in the current directory
    contents = os.listdir(folder_path)

    # Create a string to hold the HTML code for the index page
    html_str = f"""<html>
<head>
    <title>{folder_path.replace(PATH,"")}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <style>
        body {{
            margin: 0;
            padding: 0;
        }}
        .container {{
            padding: 20px;
        }}
    </style>
</head>
<body>
<div class="container">
    <h1>{HEADER}</h1>
    <h2>{folder_path.replace(PATH,"")}</h2>
    """

    # Add a back button to the page
    if folder_path != root_folder_path:
        html_str += f"""
        <p><a href="{base_url}{os.path.basename(parent_path)}/index.html"><i class="fas fa-arrow-up"></i> Back to {parent_name}</a></p>
        """

    # Add the list of contents to the page
    html_str += f"""
    <ul class="list-group">
"""

    # Iterate over the contents of the current directory
    for item in contents:
        # Skip hidden items.
        if item.startswith("."):
            continue
        # Check if the item is a folder
        if os.path.isdir(os.path.join(folder_path, item)):
            # Recursively call the function to generate an index page for the child folder
            child_index_str = generate_html_index(os.path.join(folder_path, item), base_url + item + "/")
            # Add a link to the child index page to the current index page
            html_str += f"""
            <li class="list-group-item">
                <a href="{base_url}{item}/index.html"><i class="fas fa-folder"></i> {item}</a>
            </li>
            """
            # Write the child index page to disk
            with open(os.path.join(folder_path, item, "index.html"), "w") as f:
                f.write(child_index_str)
        # Check if the item is a file
        elif os.path.isfile(os.path.join(folder_path, item)):
            # Don't include the link to the current index file
            if item.endswith('index.html'):
                continue

            # Add a link to the file to the current index page
            html_str += f"""
            <li class="list-group-item">
                <a href="{base_url}{item}"><i class="fas fa-file"></i> {item}</a>
            </li>
            """

    # Add a closing tag for the unordered list and the body and html tags
    html_str += """
    </ul>
</div>
</body>
</html>
"""

    # Return the HTML code for the current index page
    return html_str


root_folder_path = os.getcwd()
base_url = "https://jon-117.github.io/ITEC2560_Web-Client-and-Server-Programming-Coursework/"
index_str = generate_html_index(root_folder_path, base_url)
with open(os.path.join(root_folder_path, "index.html"), "w") as f:
    f.write(index_str)
