import Image from "next/image";
import React from "react";

interface ImageClassifierProps {}

export const ImageClassifier: React.FC<ImageClassifierProps> = ({}) => {
  return (
    <a href="/" target="_blank" className="block">
      <div className="flex w-[1000px] h-[250px]  shadow-xl rounded-3xl project-entry">
        <div className="w-[200px] h-full p-4">
          <div className="w-full h-full relative rounded-2xl overflow-hidden">
            <Image
              src="/dogPic.png"
              alt="dog"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="h-full flex flex-col items-center justify-center grow font-lato">
          <h3 className="text-2xl subheading">Image Classifier</h3>
          <div className="max-w-2xl mt-2">
            <p className="text-lg primaryText">
              An image classifier which can accurately predict which class an
              inputted image belongs to. Cats and dogs were the two classes in
              our classifier, and we trained it on a dataset of over 25,000
              images. Achieved prediction results of over 91% accuracy for the
              in-training sample, and over 83% accuracy for the validation
              sample.
            </p>
          </div>
          <div className="mt-4">
            <ul className="flex space-x-5 text-gray-600">
              <li>Python</li>
              <li>TensorFlow</li>
              <li>Keras</li>
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
};