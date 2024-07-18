import Layout from "@/layouts/globals";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Clipboard, X } from "lucide-react";

export default function Home() {
  // Copy Button
  const [disabledCopyButton, setDisabledCopyButton] = useState(true);
  const [copied, setCopied] = useState(false);
  // Paragraph
  const [input, setInput] = useState("");
  const [spacingParagraph, setSpacingParagraph] = useState("");

  useEffect(() => {
    if (input.paragraph?.length > 0) {
      setDisabledCopyButton(false);
      setSpacingParagraph(input.paragraph?.split('').join(" "));
    } else {
      setSpacingParagraph("");
      setDisabledCopyButton(true);
    }
  }, [input]);

  const handleInputOnChange = (event, field) => {
    setInput({
      ...input,
      [field]: event.target.value,
    });
  };

  const handleCopyText = () => {
    // Handle display message
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    // Copy paragraph
    navigator.clipboard.writeText(spacingParagraph);
  };

  return (
    <Layout>
      <main
        className="max-w-screen-sm px-4 sm:px-6 lg:px-8 mx-auto mt-8 selection:bg-green-300 selection:text-green-900"
      >
        <h1 className="text-4xl ">Spacing <span className="write">🖊️</span></h1>
        <br />
        <p>{"For some reason 💦, i built this page..."}</p>
        <p className="text-sm">{"it's use for the word count that doesn't recognize Chinese words that stick together."}</p>
        <br />
        <div className="">
          <div className='relative'>
            <Label htmlFor='paragraph' className="text-base">Paragraph: </Label>
            <Textarea onChange={(e) => handleInputOnChange(e, 'paragraph')} value={input?.paragraph} className='h-40 text-base' id='paragraph' name='paragraph' placeholder="Type your paragraph here..." />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-2 text-muted-foreground hover:bg-muted/50"
              onClick={() => setInput(i => ({ ...i, paragraph: "" }))}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <br />
          <div className='sm:col-span-2'>
            <Label className="text-base" htmlFor='magic'>Paragraph + Magic spacing pen : </Label>
            <Textarea disabled className='h-40 text-base' value={spacingParagraph} id='magic' name='magic' />
          </div>
          <br />
        </div>
        <Button disabled={disabledCopyButton} onClick={handleCopyText}><Clipboard className="mr-2 h-4 w-4" />{copied ? ("Copied") : ("Copy")}</Button>
      </main>
    </Layout>
  );
}
