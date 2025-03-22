"use client";

import { Button } from "@/components/ui/button";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { deleteResume } from "@/db/actions";
// import { useMutation } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const DeleteResumeDialog = (props: BaseDialogProps) => {
  const [open, setOpen] = useState(false);

  const params = useParams();
  const router = useRouter();

  const resumeId = params.id as string;

  //   const { mutate: handleDeleteResume, isPending } = useMutation({
  //     mutationFn: deleteResume,
  //     onSuccess: () => {
  //       toast.success("Currículo deletado com sucesso.");
  //       setOpen(false);
  //       router.push("/dashboard/resumes");
  //     }
  //   })

  const handleDeleteResume = async () => {
    try {
      await deleteResume(resumeId);
      toast.success("Currículo deletado com sucesso.");
      router.push("/dashboard/resumes");
    } catch (error) {
      console.error(error);
      toast.error("Error ao deletar currículo, tente novamente mais tarde.");
    }
  };

  const onDelete = async () => {
    handleDeleteResume();
  };

  return (
    <Dialog
      {...props}
      open={open}
      setOpen={setOpen}
      title="Deletar Currículo"
      description="Você tem certeza que deseja deletar este currículo?"
      content={
        <div className="flex gap-2 ml-auto">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="destructive" onClick={onDelete} >
            Deletar
          </Button>
        </div>
      }
    />
  );
};
