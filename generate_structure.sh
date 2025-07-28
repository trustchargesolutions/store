#!/bin/bash

# Default output file
output_file="project_structure.txt"

# Get script name for exclusion
script_name=$(basename "$0")

# Function to print usage
print_usage() {
    echo "Usage: $0 [directory_path] [output_file]"
    echo "If no directory path is provided, current directory will be used"
    echo "If no output file is provided, 'project_structure.txt' will be used"
}

# Get directory path from argument or use current directory
dir_path="${1:-.}"
# Get output file from argument or use default
output_file="${2:-project_structure.txt}"

# Check if directory exists
if [ ! -d "$dir_path" ]; then
    echo "Error: Directory '$dir_path' does not exist"
    exit 1
fi

# Clear or create the output file
> "$output_file"

# Function to read file content
read_file_content() {
    local file="$1"
    
    # Check if file is empty
    if [ ! -s "$file" ]; then
        echo "[empty]"
        return
    fi
    
    # Check if file is text or binary
    if file "$file" | grep -q "text" || file "$file" | grep -q "empty"; then
        content=$(cat "$file")
        if [ -z "$content" ]; then
            echo "[empty]"
        else
            echo "$content"
        fi
    else
        echo "[binary file]"
    fi
}

# Find all files, excluding specified directories
find "$dir_path" -type f \( \
    ! -path "*/\.*" \
    ! -path "*/.git/*" \
    ! -path "*/node_modules/*" \
    ! -path "*/src/.next/*" \
    ! -path "*/.venv/*" \
    ! -path "*/__pycache__/*" \
    ! -path "*/*.pyc" \
    ! -path "*/[Vv]env/*" \
    ! -path "*/storage/*" \
    ! -name "$script_name" \
    ! -name "$output_file" \
    ! -name "README.md" \
    ! -name "package-lock.json" \
    \) -print0 | sort -z | while IFS= read -r -d $'\0' file; do
    
    # Get relative path
    rel_path="${file#$dir_path/}"
    
    # Write file path header
    echo "# $rel_path" >> "$output_file"
    echo "" >> "$output_file"
    
    # Write file content
    read_file_content "$file" >> "$output_file"
    
    # Write separator
    echo "" >> "$output_file"
    echo "______" >> "$output_file"
    echo "" >> "$output_file"
done

echo "Project structure has been written to $output_file"