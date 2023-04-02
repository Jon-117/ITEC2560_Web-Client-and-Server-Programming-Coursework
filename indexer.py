import os

def create_index_html(dir_path):
    """
    Recursively generates an HTML index of folders and files in a directory and its subdirectories, along with their
    relative paths, and writes it to an index.html file in each directory.
    """
    # Get the current working directory
    cwd = os.getcwd()

    # Change to the specified directory
    os.chdir(dir_path)

    # Get a list of all directories and files in the specified directory
    entries = os.listdir()

    # Sort the entries alphabetically
    entries.sort()

    # Create an empty list to store the HTML entries
    html_entries = []

    # Loop through the entries
    for entry in entries:
        # Ignore hidden files (i.e., files starting with a ".")
        if entry.startswith("."):
            continue

        # Get the full path of the entry
        full_path = os.path.join(dir_path, entry)

        # Get the relative path of the entry
        rel_path = os.path.relpath(full_path, start=cwd)

        # If the entry is a directory, add a link to the HTML entries list
        if os.path.isdir(full_path):
            # Generate an index.html file for the subdirectory
            create_index_html(full_path)

            # Create an expandable list of child directories
            child_dirs = []
            for child_entry in os.listdir(full_path):
                child_full_path = os.path.join(full_path, child_entry)
                if os.path.isdir(child_full_path):
                    child_rel_path = os.path.relpath(child_full_path, start=cwd)
                    child_index_path = os.path.join(child_full_path, "index.html")
                    child_dirs.append(f'<li><a href="{child_rel_path}/">{child_entry}/</a></li>')
            if child_dirs:
                child_dir_list = '<ul style="display: none;">' + ''.join(child_dirs) + '</ul>'
                html_entries.append(f'<li><a href="{rel_path}/">{entry}/</a>{child_dir_list}</li>')
            else:
                html_entries.append(f'<li><a href="{rel_path}/">{entry}/</a></li>')
        # If the entry is a file, add a link to the HTML entries list if it's a supported type
        elif os.path.isfile(full_path):
            if entry.endswith(".html") or entry.endswith(".css") or entry.endswith(".js"):
                html_entries.append(f'<li><a href="{rel_path}">{entry}</a></li>')

    # Change back to the original working directory
    os.chdir(cwd)

    # Create the HTML index
    html_index = f"""
        <!DOCTYPE html>
        <html>
            <head>
                <title>Index of {dir_path}</title>
                <script>
                    function toggleFolder(evt) {{
                        var folder = evt.target.nextElementSibling;
                        if (folder.style.display === "none") {{
                            folder.style.display = "block";
                        }} else {{
                            folder.style.display = "none";
                        }}
                    }}
                </script>
            </head>
            <body>
                <h1>Index of {dir_path}</h1>
                <ul>
                    {''.join(html_entries)}
                </ul>
            </body>
        </html>
    """

    # Write the HTML index to a file
    with open("index.html", 'w') as f:
        f.write(html_index)

    return html_index




var = "fj"

