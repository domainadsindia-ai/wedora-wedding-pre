$obj = New-Object -ComObject Shell.Application
$f = $obj.Namespace((Get-Location).Path)
$i = $f.ParseName('gemini_generated_video_8eb72810.mp4')
0..300 | ForEach-Object {
    $val = $f.GetDetailsOf($i, $_)
    $name = $f.GetDetailsOf($null, $_)
    if ($val) {
        Write-Host "$($_): $name = $val"
    }
}
