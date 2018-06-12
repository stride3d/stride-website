If(Test-Path encoding.log)
{
    Remove-Item encoding.log
}
Start-Transcript -Path encoding.log
# Get all posts
$postsArray = (Get-ChildItem _posts);
# Create array for strings at the posts
$arrayVideoString = @();
# For each post try to find the video string (old example of html)
for($k = 0; $k -lt $postsArray.length; $k++){
    $folder = "_posts\";
    $file = $postsArray[$k];
    $fileContent = (Get-Content "$folder$file");
    for($i = 0; $i -lt $fileContent.length; $i++){
        if($fileContent[$i].Contains('<source')){
            $arrayVideoString += $fileContent[$i]
        }
    }
}
# For each post try to find the video string (new example of video class)
for($k = 0; $k -lt $postsArray.length; $k++){
    $folder = "_posts\";
    $file = $postsArray[$k];
    $fileContent = (Get-Content "$folder$file");
    for($i = 0; $i -lt $fileContent.length; $i++){
        if($fileContent[$i].Contains('include video')){
            $arrayVideoString += $fileContent[$i]
        }
    }
}

# For each video encoding and creating _full, _default, _thumb
for($j = 0; $j -lt $arrayVideoString.length; $j++){
    $arraySplitedVideo = $arrayVideoString[$j] -split ' '
    $videoWidthCustom = 0;
    for($x = 0; $x -lt $arraySplitedVideo.length; $x++){
        if($arraySplitedVideo[$x].Contains('width')){
            $videoWidthCustom = $arraySplitedVideo[$x] -replace ('width=', '') -replace('"', '')
        }
        if($arraySplitedVideo[$x].Contains('src=')){
            $arrayDetailedStringVideo = $arraySplitedVideo[$x].replace('../', '').replace('"', '').replace("'", '').replace('src=', '');
            $arraySplittedStringVideo = $arrayDetailedStringVideo -split '/';
            $videoName = $arraySplittedStringVideo[$arraySplittedStringVideo.length - 1] -replace('.mp4', '');
            $currentLocation = Get-Location;
            $videoAdressPath = $arrayDetailedStringVideo.replace($videoName, '') -replace('.mp4', '');
            If($videoAdressPath[0] -eq '/'){
                $videoAdress = "$currentLocation$videoAdressPath"
            } else {
                $videoAdress = "$currentLocation/$videoAdressPath"
            }
        }
    }
    $videoWidthDefault = ffprobe -v error -show_entries stream=width -of default=noprint_wrappers=1:nokey=1 $videoAdress$videoName.mp4

    $currentLocation = Get-Location
    Set-Location $videoAdress
    If(Test-Path $videoName'_full'.mp4)
    {
        Write-host "$videoName _full already encoded"
    } else {
         ffmpeg -i $videoName'.mp4' -profile:v baseline -level 3.0 -an $videoName'_full'.mp4 -n
         Write-host "$videoName _full was successful encoded"
    }
    If(Test-Path $videoName'_default'.mp4)
    {
        Write-host "$videoName _default already encoded"
    } else {
        if($videoWidthCustom -gt 0 -and $videoWidthCustom -lt 700){
            ffmpeg -i $videoName -profile:v baseline -level 3.0 -an -vf scale="$videoWidthCustom":-1 $videoName'_default'.mp4 -n 
             Write-host "$videoName _default was successful encoded"
            If(Test-Path $videoName'_thumb'.png)
            {
                Write-host "$videoName _thumb already encoded"
            } else {
                ffmpeg -i $videoName'_default'.mp4 -ss 00:00:01.000 -vframes 1 $videoName'_thumb'.png -n
                Write-host "$videoName _thumb was successful encoded"
            }
        } elseif($videoWidthDefault -gt 700){
            ffmpeg -i $videoName -profile:v baseline -level 3.0 -an -vf scale=700:-1 $videoName'_default'.mp4 -n 
            Write-host "$videoName _default was successful encoded"
            If(Test-Path $videoName'_thumb'.png)
            {
                Write-host "$videoName _full already encoded"
            } else {
                ffmpeg -i $videoName'_default'.mp4 -ss 00:00:01.000 -vframes 1 $videoName'_thumb'.png -n
                Write-host "$videoName _thumb was successful encoded"
            }
        } else{
            ffmpeg -i $videoName'.mp4' -profile:v baseline -level 3.0 -an $videoName'_default'.mp4 -n 
            Write-host "$videoName _default was successful encoded"
            If(Test-Path $videoName'_thumb'.png)
            {
                Write-host "$videoName _full already encoded"
            } else {
                ffmpeg -i $videoName'_default'.mp4 -ss 00:00:01.000 -vframes 1 $videoName'_thumb'.png -n
                Write-host "$videoName _thumb was successful encoded"
            }
        }
    }
    Set-Location $currentLocation
}

# Create array for strings at the posts
$arrayImageString = @();
# For each post try to find the image string (old example of html)
for($k = 0; $k -lt $postsArray.length; $k++){
    $folder = "_posts\";
    $file = $postsArray[$k];
    $fileContent = (Get-Content "$folder$file");
    for($i = 0; $i -lt $fileContent.length; $i++){
        if($fileContent[$i].Contains('<img')){
            $arrayImageString += $fileContent[$i]
        }
    }
}

# For each post try to find the video image (new example of image class)
for($k = 0; $k -lt $postsArray.length; $k++){
    $folder = "_posts\";
    $file = $postsArray[$k];
    $fileContent = (Get-Content "$folder$file");
    for($i = 0; $i -lt $fileContent.length; $i++){
        if($fileContent[$i].Contains('include image')){
            $arrayImageString += $fileContent[$i]
        }
    }
}

# For each video encoding and creating _full, _default, _thumb
for($j = 0; $j -lt $arrayImageString.length; $j++){
    $arraySplitedImage = $arrayImageString[$j] -split ' '
    $imageWidthCustom = 0;
    for($x = 0; $x -lt $arraySplitedImage.length; $x++){
        if($arraySplitedImage[$x].Contains('width')){
            $imageWidthCustom = $arraySplitedImage[$x] -replace ('width=', '') -replace('"', '')
        }
        if($arraySplitedImage[$x].Contains('src=')){
            $arrayDetailedStringImage = $arraySplitedImage[$x].replace('../', '').replace('"', '').replace("'", '').replace('src=', '');
            $arraySplittedStringImage = $arrayDetailedStringImage -split '/';
            $imageName = $arraySplittedStringImage[$arraySplittedStringImage.length - 1];
            $imageAdress = $arrayDetailedStringImage.replace($imageName, '');
            $imageNameWithoutFormat = $imageName -replace('\.\w*', '')
        }
    }

    function encodeImage{
        $ImageWidthDefault = ffprobe -v error -show_entries stream=width -of default=noprint_wrappers=1:nokey=1 $imageAdress$imageName
        $currentLocation = Get-Location
        Set-Location $imageAdress
        If(Test-Path $imageNameWithoutFormat'_full.'$imageFormat)
        {
            Write-host "$imageNameWithoutFormat _full already encoded"
        } else {
            ffmpeg -i $imageName -vf scale="$ImageWidthDefault":-1 $imageNameWithoutFormat'_thumb.'$imageFormat -n 
            Write-host "$imageNameWithoutFormat _full was successful encoded"
        }
        If(Test-Path $imageNameWithoutFormat'_thumb.'$imageFormat)
        {
            Write-host "$imageNameWithoutFormat _thumb already encoded"
        } else {
            if($imageWidthCustom -gt 0 -and $imageWidthCustom -lt 700){
                ffmpeg -i $imageName -vf scale="$imageWidthCustom":-1 $imageNameWithoutFormat'_thumb.'$imageFormat -n 
                Write-host "$imageNameWithoutFormat _thumb was successful encoded"
            } elseif($ImageWidthDefault -gt 700){
                ffmpeg -i $imageName -vf scale=700:-1 $imageNameWithoutFormat'_thumb.'$imageFormat -n 
                Write-host "$imageNameWithoutFormat _thumb was successful encoded"
            } else{
                ffmpeg -i $imageName -vf scale="$ImageWidthDefault":-1 $imageNameWithoutFormat'_thumb.'$imageFormat -n 
                Write-host "$imageNameWithoutFormat _thumb was successful encoded"
            }
        }
        Set-Location $currentLocation
    }

    if($imageAdress.Contains('http')){
        continue
    } elseif($imageAdress[0] -eq '/'){
        $imageAdress = $imageAdress.TrimStart(" ", "/")
    }
    $imageFormat = $imageName.split('.')[1];
    if(Test-Path $imageAdress$imageName){
        encodeImage
    } else {
        Write-host "$imageAdress$imageName is missed" -foregroundcolor "red"
        continue
    }
}
Stop-Transcript