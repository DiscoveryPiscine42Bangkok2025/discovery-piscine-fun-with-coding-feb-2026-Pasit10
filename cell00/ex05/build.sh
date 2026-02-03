if [ $# -eq 0 ]; then
  echo "No argument supplied"
  exit 1
fi

for folder in "$@"; do
  new_folder="ex$folder" 
  mkdir -p "$new_folder"
  chmod 755 "$new_folder"
done